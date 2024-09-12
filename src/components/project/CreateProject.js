import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const CreateProject = ({ users, projects, onCreateProject }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      usernames: [], // Proje için seçilecek kullanıcıların usernames alanı
      file: null,
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);

    // userNames dizisini JSON formatına çevirip ekliyoruz
    formData.append("userNames", JSON.stringify(data.usernames)); 

    // Eğer dosya seçilmişse
    if (data.file && data.file.length > 0) {
      formData.append("file", data.file[0]);
    }

    // API'ye proje ekleme fonksiyonunu çağırıyoruz
    onCreateProject(formData);

    // Formu temizleme
    reset();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Box sx={{ width: "30%" }}>
        <Typography variant="h6">Proje Oluştur</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Proje adı gerekli" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Proje Adı"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            rules={{ required: "Proje açıklaması gerekli" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Proje Açıklaması"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description ? errors.description.message : ""}
              />
            )}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="user-select-label">Kullanıcılar</InputLabel>
            <Controller
              name="usernames"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="user-select-label"
                  multiple
                  renderValue={(selected) =>
                    // Seçilen kullanıcıların `nameSurname` bilgilerini gösteriyoruz
                    selected
                      .map((username) =>
                        users.find((user) => user.username === username)
                          ?.nameSurname
                      )
                      .join(", ")
                  }
                >
                  {users.map((user) => (
                    <MenuItem key={user.username} value={user.username}>
                      {user.nameSurname} {/* Kullanıcı adını değil, isim soyisimi gösteriyoruz */}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Dosyalar:
            </Typography>

            <Controller
              name="file"
              control={control}
              render={({ field: { onChange } }) => (
                <Button variant="contained" component="label">
                  Dosya Seç
                  <input
                    type="file"
                    hidden
                    onChange={(e) => onChange(e.target.files)} // Dosya değişimini izliyoruz
                  />
                </Button>
              )}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Proje Oluştur
          </Button>
        </form>
      </Box>

      <Box sx={{ width: "65%" }}>
        <Typography variant="h6">Proje Listesi</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="projects table">
            <TableHead>
              <TableRow>
                <TableCell>Proje Adı</TableCell>
                <TableCell>Açıklama</TableCell>
                <TableCell align="right">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {project.name}
                    </TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell align="right">
                      {/* İşlemler buraya eklenebilir */}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Proje bulunamadı.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CreateProject;

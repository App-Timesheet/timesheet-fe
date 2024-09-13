import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import { AuthContext } from "../../AuthContext";
import { createTask, getAllTasks, getTasksByUserId } from "../../service/taskService";
import { getAllProjects, getProjectsByUserId } from "../../service/projectService";
import { getAllUsers } from "../../service/userService";

const AddTask = ({ projects, users, onCreateTask }) => {
  const { userRole, userId } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    project: "",
    type: "",
    subject: "",
    description: "",
    startDate: "",
    endDate: "",
    assignedUsers: [], // Burada default olarak boş bir dizi ayarlandı
  });

  // Task'leri yükleme
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let taskList;
        
        if (userRole === "ADMIN") {
          taskList = await getAllTasks();
        } else {
          taskList = await getTasksByUserId(userId);
        }

        setTasks(taskList || []);
      } catch (error) {
        console.error("Task verisi çekme hatası:", error.message || error);
      }
    };

    fetchTasks();
  }, [userRole, userId]);

  // **Yeni task oluşturma işlemi**
  const handleCreateTask = async () => {
    try {
      const formData = new FormData();
      formData.append("projectId", newTask.project);
      formData.append("title", newTask.subject);
      formData.append("description", newTask.description);
      formData.append("type", newTask.type);
      formData.append("startDate", newTask.startDate);
      formData.append("endDate", newTask.endDate);
      
      // Kullanıcıları eklerken null ve boş değerleri filtreleyin
      (newTask.assignedUsers || []) // assignedUsers null veya undefined ise boş bir dizi kullanılacak
        .filter(userId => userId !== null && userId !== "")
        .forEach(userId => formData.append("assignedUserIds", userId));

      const createdTask = await onCreateTask(formData);
      console.log("Task başarıyla oluşturuldu:", createdTask);
    } catch (error) {
      if (error.response) {
        console.error("API Hatası:", error.response.data);
      } else {
        console.error("Task oluşturulamadı:", error.message);
      }
    }
  };

  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <Box sx={{ width: "40%", mr: 4 }}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Project</InputLabel>
          <Select
            value={newTask.project}
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, project: e.target.value }))
            }
          >
            {projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
                {project.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Task Type"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newTask.type}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, type: e.target.value }))
          }
        />

        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newTask.subject}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, subject: e.target.value }))
          }
        />

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={newTask.description}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, description: e.target.value }))
          }
        />

        <TextField
          label="Start Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newTask.startDate}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, startDate: e.target.value }))
          }
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="End Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newTask.endDate}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, endDate: e.target.value }))
          }
          InputLabelProps={{ shrink: true }}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Assigned Users</InputLabel>
          <Select
            multiple
            native
            value={newTask.assignedUsers || []} // Eğer assignedUsers undefined ise boş dizi kullanılıyor
            onChange={(e) =>
              setNewTask((prev) => ({
                ...prev,
                assignedUsers: Array.from(
                  e.target.selectedOptions || [], // Eğer e.target.selectedOptions undefined ise boş dizi kullanıyoruz
                  (option) => option.value
                ),
              }))
            }
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleCreateTask} sx={{ mt: 2 }}>
          Add Task
        </Button>
      </Box>

      <Box sx={{ width: "60%" }}>
        <Typography variant="h6" gutterBottom>
          Task Listesi
        </Typography>

        <Paper elevation={3} sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Project</TableCell>
                <TableCell>Task Type</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.project}</TableCell>
                  <TableCell>{task.type}</TableCell>
                  <TableCell>{task.subject}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <ArchiveIcon />
                    </IconButton>
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddTask;

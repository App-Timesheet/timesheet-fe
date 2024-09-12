import { useEffect, useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import Layout from "../../Layout";
import CreateProject from "../../components/project/CreateProject";
import ButtonGroup from "../../components/button/ButtonGroup";
import { getAllProjects, createProject } from "../../service/projectService"; // Proje servisleri
import { getAllUsers } from "../../service/userService"; // Kullanıcıları API'den almak için

const CreateProjectPage = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]); // Proje listesi için state

  useEffect(() => {
    // Projeleri ve kullanıcıları alıyoruz
    const fetchProjectsAndUsers = async () => {
      try {
        // Projeleri al
        const projectList = await getAllProjects();
        setProjects(projectList || []);

        // Kullanıcıları al
        const userList = await getAllUsers(); // API'den kullanıcıları çekiyoruz
        setUsers(userList || []);
      } catch (error) {
        console.error("Veriler alınırken bir hata oluştu:", error);
      }
    };

    fetchProjectsAndUsers();
  }, []);

  const handleCreateProject = async (newProject) => {
    try {
      const createdProject = await createProject(newProject); // Proje oluşturma API çağrısı
      setProjects((prevProjects) => [...prevProjects, createdProject]); // Yeni projeyi state'e ekle
    } catch (error) {
      console.error("Proje oluşturulamadı:", error);
    }
  };

  return (
    <Layout>
      <Container>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Proje Oluşturma
          </Typography>
          <ButtonGroup />
          <CreateProject
            users={users} // Artık gerçek kullanıcıları buraya gönderiyoruz
            projects={projects}
            onCreateProject={handleCreateProject} // Proje oluşturma fonksiyonunu gönderiyoruz
          />
        </Paper>
      </Container>
    </Layout>
  );
};

export default CreateProjectPage;

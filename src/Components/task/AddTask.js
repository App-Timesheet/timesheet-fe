import React, { useState } from "react";
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
  IconButton,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';

const AddTask = ({ projects, users }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      project: "Project A",
      type: "Development",
      subject: "Frontend Development",
      description: "Develop the user interface",
      startDate: "2024-09-10",
      endDate: "2024-09-15",
      assignedUsers: ["User 1", "User 2"],
      isActive: true,
    },
    {
      id: 2,
      project: "Project B",
      type: "Testing",
      subject: "API Testing",
      description: "Test all API endpoints",
      startDate: "2024-09-12",
      endDate: "2024-09-20",
      assignedUsers: ["User 3"],
      isActive: true,
    },
    {
      id: 3,
      project: "Project C",
      type: "Design",
      subject: "UI Design",
      description: "Design the landing page",
      startDate: "2024-09-08",
      endDate: "2024-09-12",
      assignedUsers: ["User 4"],
      isActive: false,
    },
  ]);

  const [newTask, setNewTask] = useState({
    project: "",
    type: "",
    subject: "",
    description: "",
    startDate: "",
    endDate: "",
    assignedUsers: [],
    isActive: true,
  });

  const [editingTask, setEditingTask] = useState(null);
  const [showActiveTasks, setShowActiveTasks] = useState(true);

  const handleTaskChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setNewTask({
      project: "",
      type: "",
      subject: "",
      description: "",
      startDate: "",
      endDate: "",
      assignedUsers: [],
      isActive: true,
    });
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = () => {
    setTasks(tasks.map((task) => (task.id === editingTask.id ? editingTask : task)));
    setEditingTask(null);
  };

  const handleTaskFieldChange = (e) => {
    setEditingTask({
      ...editingTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleShowActive = () => {
    setShowActiveTasks(true);
  };

  const handleShowAll = () => {
    setShowActiveTasks(false);
  };

  const displayedTasks = showActiveTasks
    ? tasks.filter((task) => task.isActive)
    : tasks;

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [logData, setLogData] = useState({
    taskId: "",
    date: "",
    hours: "",
    comments: "",
    activity: "",
  });

  const handleOpenDialog = (task) => {
    setSelectedTask(task);
    setLogData({ ...logData, taskId: task.id }); 
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTask(null);
    setLogData({ taskId: "", date: "", hours: "", comments: "", activity: "" }); 
  };

  const handleFormChange = (e) => {
    setLogData({
      ...logData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    handleCloseDialog();
  };

  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <Box sx={{ width: "40%", mr: 4 }}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Project</InputLabel>
          <Select
            value={newTask.project}
            onChange={handleTaskChange}
            name="project"
          >
            {projects.map((project) => (
              <MenuItem key={project.name} value={project.name}>
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
          name="type"
          value={newTask.type}
          onChange={handleTaskChange}
        />

        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
          name="subject"
          value={newTask.subject}
          onChange={handleTaskChange}
        />

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          multiline
          rows={4}
          value={newTask.description}
          onChange={handleTaskChange}
        />

        <TextField
          label="Start Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          name="startDate"
          value={newTask.startDate}
          onChange={handleTaskChange}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="End Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          name="endDate"
          value={newTask.endDate}
          onChange={handleTaskChange}
          InputLabelProps={{ shrink: true }}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Assigned Users</InputLabel>
          <Select
            multiple
            native
            value={newTask.assignedUsers}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                assignedUsers: Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                ),
              })
            }
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateTask}
          sx={{ mt: 2 }}
        >
          Add Task
        </Button>
      </Box>

      <Box sx={{ width: "60%" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button
            variant={showActiveTasks ? "contained" : "outlined"}
            color="primary"
            onClick={handleShowActive}
            sx={{ mr: 2 }}
          >
            Aktif Tasklar
          </Button>
          <Button
            variant={!showActiveTasks ? "contained" : "outlined"}
            color="primary"
            onClick={handleShowAll}
          >
            Tüm Tasklar
          </Button>
        </Box>

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
              {displayedTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.project}</TableCell>
                  <TableCell>{task.type}</TableCell>
                  <TableCell>{task.subject}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditTask(task)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <ArchiveIcon />
                    </IconButton>
                    <IconButton onClick={() => handleOpenDialog(task)}>
                      <AddIcon /> 
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        {editingTask && (
          <Box sx={{ mt: 4, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6">Task Düzenle</Typography>
            <TextField
              label="Project"
              variant="outlined"
              fullWidth
              margin="normal"
              name="project"
              value={editingTask.project}
              onChange={handleTaskFieldChange}
            />
            <TextField
              label="Task Type"
              variant="outlined"
              fullWidth
              margin="normal"
              name="type"
              value={editingTask.type}
              onChange={handleTaskFieldChange}
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
              name="subject"
              value={editingTask.subject}
              onChange={handleTaskFieldChange}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              name="description"
              value={editingTask.description}
              onChange={handleTaskFieldChange}
            />
            <TextField
              label="Start Date"
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
              name="startDate"
              value={editingTask.startDate}
              onChange={handleTaskFieldChange}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
              name="endDate"
              value={editingTask.endDate}
              onChange={handleTaskFieldChange}
              InputLabelProps={{ shrink: true }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateTask}
              sx={{ mt: 2 }}
            >
              Update Task
            </Button>
          </Box>
        )}

        {selectedTask && (
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Log Ekle - Task ID: {selectedTask.id}</DialogTitle>
            <DialogContent>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Tarih"
                  type="date"
                  name="date"
                  value={logData.date}
                  onChange={handleFormChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Saat"
                  type="number"
                  name="hours"
                  value={logData.hours}
                  onChange={handleFormChange}
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Yorumlar"
                  name="comments"
                  value={logData.comments}
                  onChange={handleFormChange}
                  multiline
                  rows={4}
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Faaliyet</InputLabel>
                <Select
                  name="activity"
                  value={logData.activity}
                  onChange={handleFormChange}
                >
                  <MenuItem value="Design">Design</MenuItem>
                  <MenuItem value="Development">Development</MenuItem>
                  <MenuItem value="Analysis">Analysis</MenuItem>
                  <MenuItem value="Test">Test</MenuItem>
                  <MenuItem value="Devops">Devops</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>İptal</Button>
              <Button onClick={handleFormSubmit} variant="contained" color="primary">
                Tamam
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Box>
    </Box>
  );
};

export default AddTask;

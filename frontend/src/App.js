import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    Container,
    Paper,
} from '@mui/material';

function App() {
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from the backend
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('http://localhost:8000/tasks'); // Backend URL
            const data = await response.json();
            setTasks(data);
        };        

        fetchTasks();
    }, []);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">ToDo App</Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="sm" style={{ marginTop: '20px' }}>
                <Paper style={{ padding: '20px' }}>
                    <Typography variant="h5" style={{ marginBottom: '20px' }}>
                        Tasks
                    </Typography>
                    <List>
                        {tasks.map((task, index) => (
                            <ListItem
                                key={index}
                                style={{
                                    textDecoration: task.completed ? 'line-through' : 'none',
                                    background: task.completed ? '#f0f0f0' : 'transparent',
                                    borderRadius: '5px',
                                    marginBottom: '5px',
                                }}
                            >
                                <ListItemText primary={task.text} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Container>
        </div>
    );
}

export default App;

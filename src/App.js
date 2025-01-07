// Importing necessary modules and components
import React, { useReducer, useMemo, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { Container, Typography, Button, Divider } from '@mui/material';
import './App.css'; // Import the CSS file

const initialState = [];

function taskReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'toggle':
      return state.map(task =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    default:
      return state;
  }
}

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const completedCount = useMemo(() => {
    console.log('Calculating completed tasks...');
    return tasks.filter(task => task.done).length;
  }, [tasks]);

  return (
    
      <Container
        className={`App ${theme}`}
        style={{
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
          fontFamily: 'sans-serif',
          width: '50%', // Set the width to 50%
          margin: '0 auto', // Center the container horizontally
          marginTop: '50px', // Add some space from the top
        }}
      >
        <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
          Task Manager Lite
        </Typography>
        <Button variant="contained" color="primary" onClick={toggleTheme} style={{ marginBottom: '16px' }}>
          Toggle Theme
        </Button>
        <TaskInput dispatch={dispatch} theme={theme} />
        <TaskList tasks={tasks} dispatch={dispatch} />
        <Divider style={{ margin: '16px 0' }} />
        <Typography variant="body1">Completed Tasks: {completedCount}</Typography>
      </Container>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

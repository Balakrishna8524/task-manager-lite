// Importing necessary modules and components
import React, { useReducer, useMemo, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext'; // Importing theme context for managing light/dark mode
import TaskInput from './TaskInput'; // Component for adding new tasks
import TaskList from './TaskList'; // Component for displaying the list of tasks
import './index.css'; // Global styles for the application

// Initial state for the task reducer (an empty array of tasks)
const initialState = [];

// Reducer function to manage task-related actions
function taskReducer(state, action) {
  switch (action.type) {
    case 'add': // Adds a new task to the state
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'toggle': // Toggles the 'done' status of a task
      return state.map(task =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    default: // Returns the current state if the action type is not recognized
      return state;
  }
}

// Main App component
function App() {
  // useReducer hook to manage the tasks state using the taskReducer function
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  // useContext hook to access the current theme and the function to toggle the theme
  const { theme, toggleTheme } = useContext(ThemeContext);

  // useMemo hook to calculate the number of completed tasks only when the tasks array changes
  const completedCount = useMemo(() => {
    console.log('Calculating completed tasks...');
    return tasks.filter(task => task.done).length;
  }, [tasks]);

  return (
    // Main container with dynamic theme class and styling
    <div className={`App ${theme} p-8 rounded-lg bg-gray-100 font-sans`}>
      {/* Application title */}
      <h1 className="text-2xl font-bold mb-4">Task Manager Lite</h1>

      {/* Button to toggle between light and dark themes */}
      <button
        onClick={toggleTheme}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Toggle Theme
      </button>

      {/* Task input component for adding new tasks */}
      <TaskInput dispatch={dispatch} />

      {/* Task list component for displaying tasks */}
      <TaskList tasks={tasks} dispatch={dispatch} />

      {/* Divider */}
      <hr className="my-4" />

      {/* Display the count of completed tasks */}
      <p>Completed Tasks: {completedCount}</p>
    </div>
  );
}

// Wrapper component to provide the ThemeContext to the App component
export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

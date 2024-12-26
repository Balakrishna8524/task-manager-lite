import React, {useReducer, useMemo, useContext} from 'react';
import {ThemeContext, ThemeProvider} from './ThemeContext'
import TaskInput from './TaskInput';
import TaskList from './TaskList';

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
  const {theme, toggleTheme } = useContext(ThemeContext);

  const completedCount = useMemo(() => {
    console.log('Calculating completed tasks...');
    return tasks.filter(task=>task.done).length;
  } ,[tasks]);
  

  return (
    <div className={`App ${theme} p-8 rounded-lg bg-gray-100 font-sans`}>
      <h1 className="text-2xl font-bold mb-4">Task Manager Lite</h1>
      <button onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Toggle Theme</button>
      <TaskInput dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
      <hr className="my-4" />
      <p>Completed Tasks: {completedCount}</p>
      
    </div>
  );
}


export default function WrappedApp(){
  return(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

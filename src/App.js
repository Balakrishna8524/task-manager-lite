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
    <div className={'App ${theme}'} style={{padding:20}}>
      <h1>Task Manager Lite</h1>
      <button onClick={toggleTheme} >Toggle Theme</button>
      <TaskInput dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
      <hr />
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
import React, { useCallback } from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Done, Undo } from '@mui/icons-material';

function TaskList({ tasks, dispatch }) {
  const toggleTask = useCallback(
    id => dispatch({ type: 'toggle', payload: id }),
    [dispatch]
  );

  return (
    <List>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            borderRadius: '8px',
            bgcolor: 'white',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            padding: '8px'
          }}
        >
          <ListItemText primary={task.text} style={{ textDecoration: task.done ? 'line-through' : 'none' }} />
          <IconButton onClick={() => toggleTask(task.id)} color="primary">
            {task.done ? <Undo /> : <Done />}
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;

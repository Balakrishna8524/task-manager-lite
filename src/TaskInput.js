
import React, { useRef, useCallback } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TaskInput({ dispatch }) {
  const inputRef = useRef();

  const addTask = useCallback(() => {
    const value = inputRef.current.value.trim();
    if (value) {
      dispatch({ type: 'add', payload: value });
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
      <TextField
        inputRef={inputRef}
        label="Add task..."
        variant="outlined"
        size="small"
        sx={{ mr: 2, flexGrow: 1 }}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Add
      </Button>
    </Box>
  );
}

export default TaskInput;

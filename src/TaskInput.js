
import React, { useRef, useCallback } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TaskInput({ dispatch, theme }) {
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
        sx={{
			mr: 2,
			flexGrow: 1,
			'& .MuiOutlinedInput-root': {
			  '& fieldset': {
				borderColor: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.23)', // Change border color
			  },
			  '&:hover fieldset': {
				borderColor: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.87)', // Change hover border color
			  },
			  '&.Mui-focused fieldset': {
				borderColor: theme === 'dark' ? '#fff' : '#3f51b5', // Change focused border color
			  },
			},
			'& .MuiInputBase-input': {
			  color: theme === 'dark' ? '#fff' : '#000', // Change text color
			},
			'& .MuiInputLabel-root': {
			  color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.6)', // Change label color
			},
			'& .MuiInputLabel-root.Mui-focused': {
			  color: theme === 'dark' ? '#fff' : '#3f51b5', // Change focused label color
			},
		  }}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Add
      </Button>
    </Box>
  );
}

export default TaskInput;

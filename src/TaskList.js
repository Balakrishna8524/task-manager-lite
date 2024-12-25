import React, { useCallback } from 'react';

function TaskList({ tasks, dispatch }) {
  const toggleTask = useCallback(
    id => dispatch({ type: 'toggle', payload: id }),
    [dispatch]
  );

  return (
    <ul>
      {tasks.map(task => (
        <li
          key={task.id}
          style={{ textDecoration: task.done ? 'line-through' : 'none' }}
        >
          <span>{task.text}</span>
          <button onClick={() => toggleTask(task.id)}>
            {task.done ? 'Undo' : 'Done'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

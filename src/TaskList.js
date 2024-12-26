import React, { useCallback } from 'react';

function TaskList({ tasks, dispatch }) {
  const toggleTask = useCallback(
    id => dispatch({ type: 'toggle', payload: id }),
    [dispatch]
  );

  return (
    <ul className="list-none">
      {tasks.map(task => (
        <li
          key={task.id}
          className="flex items-center justify-between mb-2 rounded-lg bg-white shadow-md p-2"
        >
          <span className={task.done ? 'line-through' : ''}>{task.text}</span>
          <button onClick={() => toggleTask(task.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
            {task.done ? 'Undo' : 'Done'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

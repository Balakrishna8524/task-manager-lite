
import React, {useRef, useCallback} from 'react';

function TaskInput({dispatch}){
	const inputRef = useRef();

	const addTask = useCallback(() => {
		const value = inputRef.current.value.trim();
		if(value){
			dispatch({type:'add', payload:value});
			inputRef.current.value = '';
			inputRef.current.focus();
		}

	}, [dispatch])

	return (
		<div className="flex items-center mb-4">
			<input ref={inputRef} placeholder="Add task..." className="shadow appearance-none border rounded-lg w-full py-2 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
			<button onClick={addTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Add</button>
		</div>
	);
}

export default TaskInput;


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
		<div>
			<input ref={inputRef} placeholder="Add task..." />
			<button onClick={addTask}>Add</button>
		</div>
	);
}

export default TaskInput;
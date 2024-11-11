import React from 'react';

const TaskItem = ({ task, deleteTask, toggleComplete, setTaskToEdit }) => {
  return (
    <div
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        backgroundColor: task.completed ? '#d3f8d3' : '#fff',
      }}
    >
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => setTaskToEdit(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;

import React, { useState } from 'react';

export default function TaskCard({task, removeTask, onEdit }) {
  const [taskData, setTaskData] = useState(task);

  return (
    <div key={task.id} className='task card'>
      <button className='delete-button' onClick={() => {
          window.confirm(`Are you sure you want to remove ${task.name}`) && removeTask(task.id);
        }}>
        Delete
      </button>
      <button
        className='edit-button'
        onClick={() => {
          const updatedTask = {
            ...task,
            name: prompt('Edit Task Name', task.name)
          };
          onEdit(updatedTask);
        }}>
        Edit
      </button>
      <h4 className='list-label'>{task.name}</h4>
      <p className='list-label'>
        <strong>Description:</strong> {task.description}
      </p>
      <p className='due-date'>
        <strong>Due Date:</strong> {task.dueDate}
      </p>
      <p className='assigned-to'>
        <strong>Assigned:</strong> {task.assignedTo}
      </p>
      <p className='status'>
        <strong>Status:</strong> {task.status}
      </p>
    </div>
  );
}

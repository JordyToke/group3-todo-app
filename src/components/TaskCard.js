import React, { useState } from 'react';

export default function TaskCard({task, removeTask, onEdit }) {

  return (
    <div key={task.id} className='task card'>
      <h4 className='title field'>{task.name}</h4>
      <p className='description field'>
        <strong>Description:</strong> {task.description}
      </p>
      <div className="details fields">
        <p className='due field'>
          <strong>Due Date:</strong> {task.dueDate}
        </p>
        <p className='assigned field'>
          <strong>Assigned:</strong> {task.assignedTo}
        </p>
        <p className='status field'>
          <strong>Status:</strong> {task.status}
        </p>
      </div>
      <div className="footer fields">
        <button
          className='edit'
          onClick={() => {
            // Yong - original prompt task editor
            // const updatedTask = {
            //   ...task,
            //   name: prompt('Edit Task Name', task.name)
            // };
            console.log("Edit " + task.id);
            onEdit(task.id);
          }}>
          Edit
        </button>
        <button className='delete' onClick={() => {
            window.confirm(`Are you sure you want to remove ${task.name}`) && removeTask(task.id);
          }}>
          Delete
        </button>
      </div>
    </div>
  );
}

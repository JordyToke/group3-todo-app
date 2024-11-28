import React from 'react';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';

// TaskList takes "tasks" prop
function TaskList({ tasks, removeTask, onEdit, sort }) {
  

  // returned TaskList JSX element
  return (
    <div className='card-list'>
      <h3>Task List</h3>
      {
        tasks.length > 1 && (
          <button className='sort' onClick={() => sort('status')}>
            Sort by status
          </button>
        )
      }
      {
        tasks.length === 0 ? <p>No tasks added yet.</p> : tasks.map((task) => (
            <TaskCard key={task.id} task={task} onEdit={onEdit} />
          )
        )
      }
    </div>
  );
}

export default TaskList;

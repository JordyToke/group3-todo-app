import React from "react";

// TaskList takes "tasks" prop
function TaskList({ tasks }) {

  // returned TaskList JSX element
  return (
    <div className="task-list">
      <h3>Task List</h3>
      {/* Ternary => if there are tasks in the task list display "No tasks added yet." else map tasks to list of JSX  */}
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <hr />
          {/* Delete button currently does nothing */}
            <button className= 'delete-button'>Delete</button>
            <h4 className='list-label'>{task.name}</h4>
            <p className='list-label'>
              <strong>Description:</strong> {task.description}
            </p>
            <p className='list-label'>
              <strong>Due Date:</strong> {task.dueDate}
            </p>
            <p className='list-label'>
              <strong>Assigned:</strong> {task.assignedTo}
            </p>
            <p className='list-label'>
              <strong>Status:</strong> {task.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
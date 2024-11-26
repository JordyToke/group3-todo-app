import React from "react";

// TaskList takes "tasks" prop
function TaskList({ tasks, removeTask, onEdit, sort }) {

  // returned TaskList JSX element
  return (
    <div className="task-list">
      {/* <h3>Task List</h3> */}
      {tasks.length > 1 && (<button className="sort" onClick={() => sort("status")}>Sort by status</button>)}
      {/* Ternary => if there are tasks in the task list display "No tasks added yet." else map tasks to list of JSX  */}
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">


             {/* Delete button currently does nothing-Tristan is updating this part */}
            <button className="delete-button" onClick={function(){removeTask(task.id)}}>Delete</button>
            <button
              className="edit-button"

              onClick={() => {
                const updatedTask = {
                  ...task,
                  name: prompt("Edit Task Name", task.name),
                };
                onEdit(updatedTask);
              }}
            >
              Edit
            </button>
            <h4 className='list-label'>{task.name}</h4>
<p className='list-label'>
  <strong>Description:</strong> {task.description}
</p>
<p className="due-date">
  <strong>Due Date:</strong> {task.dueDate}
</p>
<p className="assigned-to">
  <strong>Assigned:</strong> {task.assignedTo}
</p>
<p className="status">
  <strong>Status:</strong> {task.status}
</p>

          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
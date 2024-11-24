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
            <h4>{task.name}</h4>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Due Date:</strong> {task.due}
            </p>
            <p>
              <strong>Assigned:</strong> {task.assigned}
            </p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
import React from "react";

// TaskList takes "tasks" prop
function TaskList({ tasks }) {

  // returned TaskList JSX element
  return (
    <div className="task-list">
      <h3>Task List</h3>
      {/* Ternary => if there are tasks in teh task list display "No tasks added yet." else map tasks to list of JSX  */}
      tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h4>{task.name}</h4>
            <p>
              <strong>Email:</strong> {task.email}
            </p>
            <p>
              <strong>Phone:</strong> {task.phone}
            </p>
            <p>
              <strong>Category:</strong> {task.category}
            </p>
          </div>
        ))
      )
    </div>
  );
}

export default TaskList;
import React, { useState } from "react";

// TaskList takes "tasks" prop
function TaskList({ tasks, removeTask, onEdit, onSort }) {
  const [sorted, setSorted] = useState("");

  // sort button component logic
  const sortButton = () => (
      <button className="sort" onClick={() => {
      // create new variable to hold our reordered array of tasks
      let updatedTasks = [];
      if (!sorted) {
        // if unsorted reorder tasks by status
        updatedTasks = tasks.sort((taskA, taskB) => {
          // statuses variable for enumerating task status
          const statuses = ["in-progress", "completed", "review"];
          statuses.forEach((val, num) => {
            if(taskA.status === val) {
              taskA = num;
            };
            if(taskB.status === val) {
              taskB = num;
            };
          });
          // return compared enumerated value for sort method
          return taskA > taskB ? 1 : -1;
        });
        setSorted("status")
      } else if (sorted === "status") {
        // reverse tasks if already sorted
        updatedTasks = tasks.reverse();
      }
      console.log(updatedTasks);
      onSort(updatedTasks);
    }}>Sort by status</button>
  );

  // returned TaskList JSX element
  return (
    <div className="task-list">
      <h3>Task List</h3>
      {tasks.length > 1 && sortButton()}
      {/* Ternary => if there are tasks in the task list display "No tasks added yet." else map tasks to list of JSX  */}
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <hr />
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

            <h4 className="list-label">{task.name}</h4>
            <p className="list-label">
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Due Date:</strong> {task.dueDate}
            </p>
            <p>
              <strong>Assigned:</strong> {task.assignedTo}
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
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";

function App() {
  // initialise out task list from local storage
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [sorted, setSorted] = useState(null);

  // Save tasks to localStorage whenever they change
  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    [tasks]
  );

  // Add a new task
  function addTask(task) {
    setTasks([...tasks, task]);
    setSorted(null);
  }

  //Edit a task
  function handleEdit(updatedTask) {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setSorted(null)
  };

  // Delete Tasks
  function removeTask(index){
    const newSetTasks = tasks.filter(function(task){
    return task.id !== index; // if Index matches task.id then it is filtered/deleted from array (otherwise returned)
    });
    setTasks(newSetTasks); // sets the state of setTasks to NEW state of newSetTasks
  };

  // Object to map sort methods to their corresponding functions
  const sortMethods = {
    status: sortByStatus,
    // Add other sort methods here
  };

  // handle sorting tasks list "sortMethod" determines which parameter is used to sort the task list
  function handleSort(sortMethod) {
    const sortFunction = sortMethods[sortMethod];
    if (sortFunction) {
      sortFunction();
    }
    // else some default sort function should go here
  }

  // sort task list by status
  function sortByStatus() {
    // create new variable to hold our reordered array of tasks
    let updatedTasks = tasks.slice();
    if (sorted !== "status") {
      // if unsorted reorder tasks by status
      updatedTasks.sort((taskA, taskB) => {
        // statuses variable for enumerating task status
        const statuses = ["in-progress", "completed", "review"];
        // map statuses to their index for easier comparison
        const statusMap = statuses.reduce((acc, status, index) => {
          acc[status] = index;
          return acc;
        }, {});
        // compare tasks based on their status index
        return statusMap[taskA.status] - statusMap[taskB.status];
      });
    } else if (sorted === "status") {
      // reverse tasks if already sorted
      updatedTasks.reverse();
    }
    if (updatedTasks) {
      console.log(updatedTasks);
    }
    setTasks(updatedTasks);
    setSorted("status");
  }



  return (
    <div className="app-container">
      <HelmetProvider>
        <Helmet>
          <title>Group-3 Todo App</title>
        </Helmet>
      </HelmetProvider>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onEdit={handleEdit} removeTask={removeTask} sort={handleSort}/>
    </div>
  );
}

export default App;

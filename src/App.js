import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Helmet, HelmetProvider } from "react-helmet-async"
import "./App.css";

function App() {
  // initialise out task list from local storage
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  // Save tasks to localStorage whenever they change
  useEffect(function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  function addTask (task) {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app-container">
      <HelmetProvider>
        <Helmet>
          <title>Group-3 Todo App</title>
        </Helmet>
      </HelmetProvider>
      <h1>Task Management App</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
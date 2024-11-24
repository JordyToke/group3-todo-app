import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";
import dummyData from "./components/Tasks.json";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on initialization
  useEffect(function() {
    const savedTasks = dummyData || [];
    setTasks(savedTasks);
  }, []);

  // Load tasks from localStorage on initialization
  // useEffect(function() {
  //   const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   setTasks(savedTasks);
  // }, []);

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
      <h1>Task Management App</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
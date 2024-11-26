import React, { useState, useEffect } from "react";

function TaskForm({ onAddTask }) {
  // Initialize formData with default values or from localStorage
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {
      name: "",
      description: "",
      dueDate: "",
      assignedTo: "",
      status: "in-progress",
    }
  );

  const [error, setError] = useState("");

  // Save formData to localStorage on change
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error on input change
  };

  // Validation function
  const validateForm = () => {
    const { name, description, dueDate, assignedTo } = formData;
    const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Alphabetic with min/max length
    const assignedToRegex = /^[a-zA-Z0-9\s]{3,30}$/; // Alphanumeric with min/max length
    const today = new Date().toISOString().split("T")[0];

    if (!name || !description || !dueDate || !assignedTo) {
      return "All fields are required.";
    }
    if (!nameRegex.test(name)) {
      return "Name must be 3-50 alphabetic characters.";
    }
    if (!assignedToRegex.test(assignedTo)) {
      return "AssignedTo must be 3-30 alphanumeric characters.";
    }
    if (dueDate <= today) {
      return "Due date must be in the future.";
    }
    if (description.length < 10 || description.length > 200) {
      return "Description must be between 10-200 characters.";
    }

    return ""; // No errors
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateForm();

    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    // Add unique ID to the task
    const newTask = { ...formData, id: Date.now() };

    // Pass task to the parent component
    onAddTask(newTask);

    // Reset form data
    setFormData({
      name: "",
      description: "",
      dueDate: "",
      assignedTo: "",
      status: "in-progress",
    });

    setError("");
  };

  // JSX Render
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <div>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="form-input"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          name="description"
          className="form-input"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="dueDate" className="form-label">
          Due Date:
        </label>
        <input
          type="date"
          name="dueDate"
          className="form-input"
          id="dueDate"
          value={formData.dueDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="assignedTo" className="form-label">
          Assigned To:
        </label>
        <input
          type="text"
          name="assignedTo"
          className="form-input"
          id="assignedTo"
          value={formData.assignedTo}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="status" className="form-label">
          Status:
        </label>
        <select
          name="status"
          className="form-input"
          id="status"
          value={formData.status}
          onChange={handleInputChange}
        >
          <option value="in-progress">In-progress</option>
          <option value="completed">Completed</option>
          <option value="review">Review</option>
        </select>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

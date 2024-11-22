import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Family",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.email || !formData.phone) {
      setError("All fields are required!");
      return;
    }

    setError("");

    // Add a unique ID to the task
    const newTask = { ...formData, id: Date.now() };

    // Pass the task to the parent component
    onAddTask(newTask);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "Family",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="Family">Family</option>
          <option value="Work">Work</option>
          <option value="Friends">Friends</option>
        </select>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
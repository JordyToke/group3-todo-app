import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  // initialise formData from session storage or to default empty form values
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("formData")) || {
    name: '',
    description: '',
    dueDate: '',
    assignedTo: '',
    status: 'in-progress',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // save current form progress to local storage
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  // form validation is included in here
  const handleSubmit = (e) => {
    // necessary to prevent the page refreshing on submit
    e.preventDefault();
    // reset error
    setError('');

    // save individual fields from the form data
    const { name, description, dueDate, assignedTo, status } = formData;

    // checks all fields have been filled
    if (!name || !description || !dueDate || !assignedTo || !status) {
      setError('All fields are required.');
      console.log(error);
    }
    // validate date to be after current date
    // alpha numeric validation
    // minimum and maximum lengths

    if (!error) {
      // Add a unique ID to the task
      const newTask = { ...formData, id: Date.now() };
      // Pass the task to the parent component
      onAddTask(newTask);

      // Reset form: date defaults to date now, status defaults to in-progress
      setFormData({
        name: '',
        description: '',
        dueDate: '',
        assignedTo: '',
        status: 'in-progress',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <div>
        <label for='name'>Name:</label>
        <input type='text' name='name' id='name' value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label for='description'>Description:</label>
        <textarea type='text' name='description' id='description' value={formData.description} onChange={handleInputChange} />
      </div>
      <div>
        <label for='dueDate'>DueDate:</label>
        <input type='date' name='dueDate' id='dueDate' value={formData.dueDate} onChange={handleInputChange} />
      </div>
      <div>
        <label for='assignedTo'>AssignedTo:</label>
        <input type='text' name='assignedTo' id='assignedTo' value={formData.assignedTo} onChange={handleInputChange} />
      </div>
      <div>
        <label for='status'>Status:</label>
        <select name='status' id='status' value={formData.status} onChange={handleInputChange}>
          <option value='in-progress' selected>In-progress</option>
          <option value='completed'>Completed</option>
          <option value='review'>Review</option>
        </select>
      </div>
      {error && <p className='error-message'>{error}</p>}
      <button type='submit'>Add Task</button>
    </form>
  );
}

export default TaskForm;

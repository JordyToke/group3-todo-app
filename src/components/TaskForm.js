import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dueDate: '',
    assignedTo: '',
    status: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // form validation is included in here
  const handleSubmit = (e) => {
    e.preventDefault();

    // save fields from the form data
    const { name, description, dueDate, assignedTo, status } = formData;

    // checks all fields have been filled
    if (!name || !description || !dueDate || !assignedTo || !status) {
      console.log('All fields are required.');
    }

    // validate date to be after current date
    // alpha numeric validation
    // minimum and maximum lengths

    setError('');

    // Add a unique ID to the task
    const newTask = { ...formData, id: Date.now() };

    // Pass the task to the parent component
    onAddTask(newTask);

    // Reset form
    setFormData({
      name: '',
      description: '',
      dueDate: '',
      assignedTo: '',
      status: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <div>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea type='text' name='description' value={formData.description} onChange={handleInputChange} />
      </div>
      <div>
        <label>DueDate:</label>
        <input type='date' name='dueDate' value={formData.dueDate} onChange={handleInputChange} />
      </div>
      <div>
        <label>AssignedTo:</label>
        <input type='text' name='assignedTo' value={formData.assignedTo} onChange={handleInputChange} />
      </div>
      <div>
        <label>Status:</label>
        <select name='status' value={formData.status} onChange={handleInputChange}>
          <option value='in-progress'>In-progress</option>
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

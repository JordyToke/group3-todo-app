import React, { useState, useEffect } from 'react';

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
    // reset error
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // save current form progress to local storage
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData])

  // log new errors to console
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  // form validation is included in here
  const handleSubmit = (e) => {
    // necessary to prevent the page refreshing on submit
    e.preventDefault();
    let valid = true;

    // save individual fields from the form data
    const { name, description, dueDate, assignedTo, status } = formData;

    // ADD ANY EXTRA VALIDATION HERE
    // validate date to be after current date
    // alpha numeric validation
    // minimum and maximum lengths

    // checks all fields have been filled
    if (!name || !description || !dueDate || !assignedTo || !status) {
      setError('All fields are required.');
      valid = false;
    }

    // if form data is valid
    if (valid) {
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

  // What is actually retunred to be displayed ont he page
  return (
    <form ID='form' onSubmit={handleSubmit}>
      <h3 className='form-header'>Add Task</h3>
      <div className='name'>
        <label htmlFor='name' className='form-label'>Name:</label>
        <input type='text' name='name' className='form-input' id='name' value={formData.name} onChange={handleInputChange} />
      </div>
      <div className='description'>
        <label htmlFor='description' className='form-label'>Description:</label>
        <textarea type='text' name='description' className='form-input' id='description' value={formData.description} onChange={handleInputChange} />
      </div>
      <div className='due-date'>
        <label htmlFor='dueDate' className='form-label'>DueDate:</label>
        <input type='date' name='dueDate' className='form-input' id='dueDate' value={formData.dueDate} onChange={handleInputChange} />
      </div>
      <div className='assigned-to'>
        <label htmlFor='assignedTo' className='form-label'>AssignedTo:</label>
        <input type='text' name='assignedTo' className='form-input' id='assignedTo' value={formData.assignedTo} onChange={handleInputChange} />
      </div>
      <div className='status'>
        <label htmlFor='status' className='form-label'>Status:</label>
        <select name='status' className='form-input' id='status' value={formData.status} onChange={handleInputChange}>
          <option value='in-progress'>In-progress</option>
          <option value='completed'>Completed</option>
          <option value='review'>Review</option>
        </select>
      </div>
      {error && <p className='error-message'>{error}</p>}
      <button type='submit' className='submit-button'>Add Task</button>
    </form>
  );
}

export default TaskForm;

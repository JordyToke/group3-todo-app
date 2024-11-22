[Group-3 Project: React Todo App](top)

# Simple Instructions for the To-Do App Assessment

## Create a Form to Add Task

### Include input fields

<ul>
  <li>
    <input type="checkbox" checked />
    <span class="field checkmark">Name (text input)</span>
  <li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Description (text area)</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Due Date (date picker)</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Assigned To (text input)</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Status (dropdown with options: in-progress, completed, review)</span>
  </li>
</ul>

### Validate Form Inputs

<ul>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Check that all fields are filled in before submission.</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Show an error message if any field is empty or invalid (e.g., "Name cannot be empty").</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">When a new task is added, generate a unique ID for it (e.g., using Date.now() or an incrementing number).</span>
  </li>
</ul>

### Save Tasks

<ul>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Store tasks as objects (e.g., { id, name, description, dueDate, assignedTo, status }) in an array.</span>
  <li>
  </li>
    <input type="checkbox" />
    <span class="field checkmark">Save this array in localStorage to keep tasks even when the page is refreshed.</span>
  </li>
</ul>

### Display Tasks on the Page

<ul>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Loop through the saved tasks and show each task on the page.</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Display these details: Name, Description, Due Date, Assigned To, Status.</span>
  </li>
</ul>

### Edit and Remove Tasks

<ul>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Add buttons for Edit and Delete next to each task.</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Edit: Allow the user to change task details in the form.</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Delete: Remove the task from the array and update the display.</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Sort Tasks by Status:</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Add a button or dropdown to sort tasks by their status (in-progress, completed, review).</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Rearrange the displayed tasks accordingly.</span>
  </li>
</ul>

[To Top ⬆️](#top)

<style>
  .field {
    background-color: gray;
  }

  input:checked ~ .checkmark {
    background-color: green;
  }
  
  ul {
    list-style: none;
  }
</style>

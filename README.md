# <p align="center"><a href="https://github.com/JordyToke/group3-todo-app" id="top">Group-3 Project: React Todo App </a></p>

![GitHub last commit](https://img.shields.io/github/last-commit/jordyToke/group3-todo-app)

## <span style="color:yellow">Getting Started</span>

After cloning or pulling the repo if you have any immediate issues make sure to run `npm install` in case any packages or dependencies have been updated.

---

## Create a Form to Add Task

### Create input fields

- [x] Name (text input)
- [x] Description (text area)
- [x] Due Date (date picker)
- [x] Assigned To (text input)
- [x] Status (dropdown with options: in-progress, completed, review)

### Validate Form Inputs

- [ ] Check that all fields are filled in before submission.
- [ ] Show an error message if any field is empty or invalid (e.g., "Name cannot be empty").
- [ ] When a new task is added, generate a unique ID for it (e.g., using Date.now() or an incrementing number).

---

## Save Tasks

- [ ] Store tasks as objects (e.g., { id, name, description, dueDate, assignedTo, status }) in an array.
- [ ] Save this array in localStorage to keep tasks even when the page is refreshed.

## Edit and Remove Tasks

- [ ] Add buttons for Edit and Delete next to each task.
- [ ] Edit: Allow the user to change task details in the form.
- [ ] Delete: Remove the task from the array and update the display.

---

## Create a List to Display Tasks

### Display Tasks on the Page

- [x] Loop through the saved tasks and show each task on the page.
- [x] Display these details: Name, Description, Due Date, Assigned To, Status.

### Sort Tasks by Status

- [ ] Add a button or dropdown to sort tasks by their status (in-progress, completed, review).
- [ ] Rearrange the displayed tasks accordingly.

___

<p align="center"><a href="#top">Back To Top ⬆️</a></p>

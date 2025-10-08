# To-Do-List
This project is a simple and responsive To-Do List web application built with HTML, CSS, and JavaScript. It allows users to add, check off, and remove tasks, with all tasks stored using localStorage so the list persists across sessions. The UI is styled for modern appearance and includes custom checked and unchecked icons

Features
* Add new tasks to your list easily.
* Mark tasks as completed, visually indicated with custom icons.
* Remove tasks with one click.
* Automatic saving and restoring of your list using localStorage.
* Clear feedback when trying to add an empty task.
* Responsive, visually appealing layout using the Poppins font and custom images for task states.

Installation
* Download or clone the repository files: index.html, style.css, app.js, plus checked.jpg and unchecked.jpg for task status icons.
* Place all files in the same directory without subfolders, to avoid path issues with images referenced in CSS.
* Open index.html in any web browser to use the To-Do List.

File Overview
* index.html: Main page structure and inputs for the To-Do List.
* style.css: Styles for a clean, centered layout and visual responsiveness; custom icons for checked/unchecked states.
* app.js: Application logic for adding, checking, removing, and saving tasks; handles all interactions and localStorage.
* checked.jpg: Custom icon for completed (checked) tasks.
* unchecked.jpg: Custom icon for pending (unchecked) tasks.

Usage
* Type a task in the input and click "Add".
* Click a task to mark it as completed, or click the "×" to remove it.
* All changes are automatically saved. Reopening the page will restore your previous list.

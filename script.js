document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        // Append delete button to list item
        li.appendChild(deleteBtn);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";

        // Delete task functionality
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    }
});
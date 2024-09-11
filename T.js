document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add a new task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span class="task-text">${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
    });

    // Handle task list actions
    taskList.addEventListener('click', (e) => {
        const target = e.target;
        const taskItem = target.closest('li');

        if (target.classList.contains('edit')) {
            editTask(taskItem);
        } else if (target.classList.contains('delete')) {
            deleteTask(taskItem);
        } else if (target.type === 'checkbox') {
            toggleCompletion(taskItem);
        }
    });

    // Edit a task
    function editTask(taskItem) {
        const taskTextElement = taskItem.querySelector('.task-text');
        const newText = prompt('Edit your task:', taskTextElement.textContent);

        if (newText) {
            taskTextElement.textContent = newText;
        }
    }

    // Delete a task
    function deleteTask(taskItem) {
        taskItem.remove();
    }

    // Toggle task completion
    function toggleCompletion(taskItem) {
        const taskTextElement = taskItem.querySelector('.task-text');
        if (taskItem.querySelector('input[type="checkbox"]').checked) {
            taskTextElement.style.textDecoration = 'line-through';
            taskTextElement.style.color = '#999';
        } else {
            taskTextElement.style.textDecoration = 'none';
            taskTextElement.style.color = '#333';
        }
    }
});

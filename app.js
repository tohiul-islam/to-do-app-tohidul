document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const inputField = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    // Function to add a new to-do item
    addButton.addEventListener('click', function () {
        const todoText = inputField.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            inputField.value = ''; // Clear the input field after adding
        }
    });

    // Function to create and append a new to-do item to the list
    function addTodoItem(text) {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-gray-200 p-2 my-2 rounded';

        const todoContent = document.createElement('span');
        todoContent.textContent = text;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600';

        // Append content and buttons to the list item
        li.appendChild(todoContent);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        // Event listener to edit the to-do item
        editButton.addEventListener('click', function () {
            const newContent = prompt('Edit your task:', todoContent.textContent);
            if (newContent !== null && newContent.trim() !== '') {
                todoContent.textContent = newContent.trim();
            }
        });

        // Event listener to delete the to-do item
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });
    }
});

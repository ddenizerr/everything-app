document.addEventListener('DOMContentLoaded', () => {

    const todoTask = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const addButton = document.getElementById('add-todo');
    const clearButton = document.getElementById('clear-todo-list');

    todoTask.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });


    clearButton.addEventListener('click', () => {

        todoList.innerHTML = '';

    });

    addButton.addEventListener('click', () => {

        const task = todoTask.value.trim();
        if (task === '') {
            alert('Please enter a task');
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'flex items-center justify-between p-2 bg-red-500 text-white rounded mb-2';

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'mr-2 accent-[#ff3b3b]';

        const taskText = document.createElement('span');
        taskText.textContent = task;

        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                taskText.classList.add('line-through', 'transition-all', 'duration-500');
                setTimeout(() => {
                    listItem.remove();
                }, 700);
            }
        });

        listItem.appendChild(checkBox);
        listItem.appendChild(taskText);
        todoList.appendChild(listItem);
        todoTask.value = '';

    })
})
import {saveTasks, deleteTask} from './localstorage';

export  function renderTask(task, container, tasksArray) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p class="description" style="display:none">${task.description}</p>
        <p>Due date: ${task.dueDate}</p>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    const completeBtn = taskItem.querySelector('.complete-btn');
    const deleteBtn = taskItem.querySelector('.delete-btn');

    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        tasksArray = tasksArray.filter(task => task !== task);
        deleteTask(task);
        taskItem.remove(); 

        saveTasks(tasksArray);
    });

    deleteBtn.addEventListener('click', () => {
        // Remove task from the array and re-render the task list
        tasksArray = tasksArray.filter(task => task !== task);
        deleteTask(task);
        taskItem.remove(); // Remove the task from the DOM
    });

    const priorityColor = document.createElement('div');
    priorityColor.classList.add('priority-color');

    switch (task.priority) {
        case 'low':
            taskItem.style.backgroundColor = 'green';
            break;
        case 'medium':
            taskItem.style.backgroundColor = 'orange';
            break;
        case 'high':
            taskItem.style.backgroundColor = 'red';
            break;
    }
    taskItem.appendChild(priorityColor);

    container.appendChild(taskItem);


}





// Remove the extra closing curly brace
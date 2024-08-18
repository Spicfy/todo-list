import {deleteTask} from './localstorage';

export function renderTask(task, container, tasksArray) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p class="description" style="display:none">${task.description}</p>
        <p>Due date: ${task.dueDate}</p>
        <button class="complete-btn taskBtn">${task.completed ? "remove completed": "Complete"}</button>
        <button class="delete-btn taskBtn">Delete</button>
        <button class="descriptionB taskBtn">Description</button>
    `;
    
    

    const completeBtn = taskItem.querySelector('.complete-btn');
    const deleteBtn = taskItem.querySelector('.delete-btn');
    
    const descriptionBtn = taskItem.querySelector('.descriptionB');
    
    descriptionBtn.addEventListener('click', () =>{
        const description = taskItem.querySelector('.description');
        if(description.style.display === 'none'){
            description.style.display = 'block';
            descriptionBtn.textContent = 'Hide Description';
        }
        else{
            description.style.display = 'none';
            descriptionBtn.textContent = 'Description';
        }
    })



    completeBtn.addEventListener('click', () => {
        task.completed = !task.completed;  // Toggle the completed status
        completeBtn.textContent = task.completed ? "Remove Completed" : "Complete";  // Update the button text

        // Optionally, you can add a visual cue to indicate the task is completed, like adding a strikethrough:
        if (task.completed) {
            taskItem.style.textDecoration = 'line-through';
        } else {
            taskItem.style.textDecoration = 'none';
        }
    });

    deleteBtn.addEventListener('click', () => {
        // Remove task from the array and re-render the task list
        tasksArray.filter(t => t !== task);
        taskItem.remove(); // Remove the task from the DOM
        deleteTask(task.title); // Remove the task from local storage
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
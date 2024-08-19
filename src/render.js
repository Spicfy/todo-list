import {deleteTask, loadTasks, saveTasks} from './localstorage';
import {displayCompleted, displayToday, displayUpcoming} from './displayToday';
export function renderTask(task, container, tasksArray) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p class="description" style="display:none">${task.description}</p>
        <p>Due date: ${task.dueDate}</p>
        <button class="complete-btn taskBtn">${task.completed ? "restore task": "Complete"}</button>
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
        const initialState = task.completed;
        const alltasks = loadTasks();
        task.completed = !task.completed;
        completeBtn.textContent = task.completed ? "restore task": "Complete";
        const taskIndex = alltasks.findIndex(t => t.title === task.title);

        if(taskIndex !== -1){
            alltasks[taskIndex].completed = task.completed;
        }

        saveTasks(alltasks);

        if(task.dueDate === new Date().toISOString().split('T')[0] && (!initialState)){
            displayToday();
        }
        else if(task.dueDate > new Date().toISOString().split('T')[0] && (!initialState)){
            displayUpcoming();
    }
    else if(initialState){
        displayCompleted();
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
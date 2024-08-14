import add from './images/add.svg';
import { Todo } from './todos';

function loadToday() {
    let tasksArray = [];
    const content = document.getElementById('content');
    const today = document.createElement('div');
    const addBtn = document.createElement('button');
    const addBtnImg = document.createElement('img');
    addBtnImg.src = add;
    addBtnImg.alt = 'add';
    const addBtnDiv = document.createElement('span');
    addBtnDiv.textContent = 'Add Task';
    addBtn.appendChild(addBtnDiv);
    addBtn.appendChild(addBtnImg);
    addBtn.classList.add('add-btn');
    content.appendChild(addBtn);
    const addTask = document.createElement('form');
    today.classList.add('today');

    addTask.style.display = 'none';
    addTask.setAttribute('id', 'add-task-form');
    addTask.innerHTML = `
        <label for="task-title">Task title:</label>
        <input type="text" id="task-title" name="taskTitle" placeholder="Task title" required>

        <label for="task-description">Task description:</label>
        <textarea id="description" name="description" placeholder="Enter task description" rows="30" cols="50"></textarea>
        
        <label for="task-date">Due date:</label>
        <input type="date" id="task-date" name="taskDate" required>

        <label for="priority">Priority:</label>
        <select id="priority" name="priority" required>
            <option value="low" style="color: green;">Low</option>
            <option value="medium" style="color: orange;">Medium</option>
            <option value="high" style="color:red;">High</option>
        </select>

        <button type="submit" id="submit">Add Task</button>
        <button type="button" id="cancel">cancel </button>
    `;



    today.appendChild(addTask);
    content.appendChild(today);
    const cancel = document.getElementById('cancel');
    cancel.addEventListener('click', () =>{
        addTask.style.display = 'none';
    })

    addBtn.addEventListener('click', () => {
        addTask.style.display = 'flex';
    });

    addTask.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('task-date').value;
        const priority = document.getElementById('priority').value;

        const newTodo = new Todo(title, description, dueDate, priority);
        tasksArray.push(newTodo);

        // Render the new task only
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        taskItem.innerHTML = `
            <h3>${newTodo.title}</h3>
            <p class="description" style="display:none">${newTodo.description}</p>
            <p>Due date: ${newTodo.dueDate}</p>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;

        const completeBtn = taskItem.querySelector('.complete-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', () => {
            // Remove task from the array and re-render the task list
            tasksArray = tasksArray.filter(task => task !== newTodo);
            taskItem.remove(); // Remove the task from the DOM
        });

        const priorityColor = document.createElement('div');
        priorityColor.classList.add('priority-color');

        switch (newTodo.priority) {
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

        content.insertBefore(taskItem, addBtn);
    });
}

export default loadToday;

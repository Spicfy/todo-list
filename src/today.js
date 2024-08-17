import add from './images/add.svg';
import { Todo } from './todos';
import {saveTasks,loadTasks, deleteTask} from './localstorage'; 
import {renderTask} from './render';

function loadToday() {

    let tasksArray = loadTasks();
    
    const content = document.getElementById('content');
    tasksArray.forEach(task => {
        renderTask(task, content, tasksArray);
    })


    const today = document.createElement('div');
    const addBtn = document.createElement('button');
    const addBtnImg = document.createElement('img');
    addBtnImg.src = add;
    addBtnImg.alt = 'add';
    const addBtnDiv = document.createElement('span');
    addBtnDiv.textContent = 'Add Task';
    addBtn.appendChild(addBtnImg);
    addBtn.appendChild(addBtnDiv);
    
    addBtn.classList.add('add-btn');
    const sidebar = document.querySelector('.top');
    sidebar.appendChild(addBtn);
    addBtn.classList.add('view');

    const addTask = document.createElement('form');
    today.classList.add('today');
    document.body.appendChild(today);
    addTask.style.display = 'none';
    addTask.setAttribute('id', 'add-task-form');
    addTask.innerHTML = `
        <label for="task-title">Task title:</label>
        <input type="text" id="task-title" name="taskTitle" placeholder="Task title" required>

        <label for="task-description">Task description:</label>
        <textarea id="description" name="description" placeholder="Enter task description" rows="10" cols="50"></textarea>
        
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



    content.appendChild(addTask);
  
    const cancel = document.getElementById('cancel');
    cancel.addEventListener('click', () =>{
        addTask.style.display = 'none';
        const tasks = document.querySelectorAll('.task-item');
        tasks.forEach(task => task.style.display = 'block');
        addBtn.style.display = 'flex';
    })

    addBtn.addEventListener('click', () => {
        addTask.style.display = 'flex';
        addBtn.style.display = 'none';
        const tasks = document.querySelectorAll('.task-item');
        tasks.forEach(task => task.style.display = 'none');
   
    });

    addTask.addEventListener('submit', (e) => {
        e.preventDefault();

      

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('task-date').value;
        const priority = document.getElementById('priority').value;

        const duplicate = tasksArray.find(task => task.title === title);
        if(duplicate){
            alert('Task with the same title already exists');
            return;
        }

        const newTodo = new Todo(title, description, dueDate, priority);
        tasksArray.push(newTodo);

        saveTasks(tasksArray);

        renderTask(newTodo, content, tasksArray);

        addTask.style.display = 'none';
        addBtn.style.display = 'flex';
        const tasks = document.querySelectorAll('.task-item');
        tasks.forEach(task => task.style.display = 'block');

    });

  

       
}

export default loadToday;

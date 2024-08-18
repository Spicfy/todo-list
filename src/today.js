
import { Todo } from './todos';
import {saveTasks,loadTasks, deleteTask} from './localstorage'; 
import {renderTask} from './render';
import { getTodayTasks } from './filter';
import { displayToday, displayCompleted, displayUpcoming } from './displayToday';

function loadToday() {

    let tasksArray = loadTasks();

    tasksArray.forEach(task => {
        console.log(task.completed);
    });
    console.log(new Date().toISOString().split('T')[0]);
    
    const content = document.getElementById('content');



    const today = document.createElement('div');
    

    const addTask = document.createElement('form');
    today.classList.add('today');
    document.body.appendChild(today);
    addTask.style.display = 'none';
    const addBtn = document.getElementById('add-btn');
    addBtn.classList.add('view');
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

    const formContainer = document.getElementById('form-container');
    formContainer.appendChild(addTask);
  
    const cancel = document.getElementById('cancel');
    cancel.addEventListener('click', () =>{
        addTask.style.display = 'none';
        addBtn.style.display = 'flex';
    })

    addBtn.addEventListener('click', () => {
        addTask.style.display = 'flex';
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

        

        addTask.style.display = 'none';


    });

    const todayTasks = document.getElementById('today');
    todayTasks.addEventListener('click', () =>{
        displayToday();
    })
    const upcoming = document.getElementById('upcoming');
    upcoming.addEventListener('click', () =>{
        displayUpcoming();
    })
    const completed = document.getElementById('completed');
    completed.addEventListener('click', () =>{
        displayCompleted();
    })

  

       
}

export default loadToday;

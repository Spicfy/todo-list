function createTodoFOrm() {
    addTask.style.display = 'none';
    const addTask = document.createElement('form');
    addTask.setAttribute('id', 'add-task-form');
    addTask.innerHTML=`
        <label for="task-title">Task title:</label>
        <input type ="text" id="task-title" name="taskTitle" placeholder="Task title" required>

        <label for="task-description">Task description:</label>
        <textarea id="description" name="description" placeholder="Enter task description" rows = rows = "30" cols = "50"></textarea>
        
        <label for="task-date">Due date:</label>
        <input type="date" id="task-date" name="taskDate" required>

        <label for="priority">Priority:</label>
        <select id="priority" name="priority" required>
        <option value = "low" style ="color: green;">Low</option>
        <option value = "medium" style="color: orange;">Medium</option>
        <option value = "high" style="color:red;">High</option>
        </select>

        <button type="submit">Add Task</button>`

        addBtn.addEventListener('click', () =>{
            addTask.style.display = 'flex';
        });
    
        addTask.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const title = document.getElementById('task-title').value;
            const description = document.getElementById('description').value;
            const dueDate = document.getElementById('task-date').value;
            const priority = document.getElementById('priority').value;
            
            const newTodo = new Todo(title, description, dueDate, priority);
    
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
    
            taskItem.innerHTML = `
                <h3>${title}</h3>
                <p class="description" style: display="none">${description}</p>
                <p>Due date: ${dueDate}</p>
                <div> </div>
                <button class="complete-btn">Complete</button>
                <button class="delete">Delete</button>
            `;
    
            const completeBtn = taskItem.querySelector('.complete-btn');
            const deleteBtn = taskItem.querySelector('.delete');
    
            completeBtn.addEventListener('click', ()=> {
                taskItem.classList.toggle('completed');
            })
    
            deleteBtn.addEventListener('click', ()=>)
    
    
            const priorityColor = document.createElement('div');
            priorityColor.classList.add('priority-color');
    
            switch(priority){
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
}





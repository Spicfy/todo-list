

export function saveTasks(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
 
}
export function loadTasks(){
    let tasks = localStorage.getItem('tasks');
    if(!tasks){
        return [];
    }
    return JSON.parse(tasks);
}

export function deleteTask(taskTitle){
    let tasks = loadTasks();
    tasks = tasks.filter(task => task.title !== taskTitle );
    saveTasks(tasks);
}
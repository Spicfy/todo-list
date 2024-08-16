

export function saveTasks(tasks){
    localStorage.setItem(tasks.title, JSON.stringify(tasks));
 
}
export function loadTasks(){
    let tasks = [];
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let task = JSON.parse(localStorage.getItem(key));
        tasks.push(task);
    }
}

export function deleteTask(task){
    localStorage.removeItem(task.title);
}
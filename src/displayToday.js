import {loadTasks} from './localstorage';
import {renderTask} from './render';
import { getTodayTasks, getUpcomingTasks, getCompletedTasks } from './filter';

const content = document.getElementById('content');
export function displayToday(){
    const allTasks = document.querySelectorAll('.task-item');
    allTasks.forEach(task => task.style.display = 'none');
    let tasksArray = loadTasks();
    const todaysTasks = getTodayTasks(tasksArray);
    
    todaysTasks.forEach(task => {
        console.log('were here today');
        renderTask(task, content, todaysTasks);
    })
}
export function displayUpcoming(){
    const allTasks = document.querySelectorAll('.task-item');
    allTasks.forEach(task => task.style.display = 'none');
    let tasksArray = loadTasks();
    const upcomingTasks = getUpcomingTasks(tasksArray);

    upcomingTasks.forEach(task => {
        renderTask(task, content, upcomingTasks);
    })
}

export function displayCompleted(){
    const allTasks = document.querySelectorAll('.task-item');
    allTasks.forEach(task => task.style.display = 'none');
    let tasksArray = loadTasks();
    const completedTasks = getCompletedTasks(tasksArray);

    completedTasks.forEach(task => {
        renderTask(task, content, completedTasks);
    })
}



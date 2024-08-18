import './style.css';
import loadToday from './today';
import calender from './images/calender_Month.svg';
import tday from './images/today.svg';
import event from './images/event_completed.svg';
import add from './images/add.svg';
import displayToday from './displayToday';


function createTabs() {
    console.log('we made it to createTabs');
    const today = document.getElementById('today');
    const todayIcon = document.createElement('img');
    todayIcon.src = tday;
    todayIcon.alt = 'today';
    todayIcon.classList.add('icon');
    today.appendChild(todayIcon);
    const todayDiv = document.createElement('span');
    todayDiv.textContent = 'Today';
    today.appendChild(todayDiv);
    const upcoming = document.getElementById('upcoming');
    const upcomingDiv = document.createElement('span');

    const calenderIcon = document.createElement('img');
    calenderIcon.src = calender;
    calenderIcon.alt = 'calender';
    calenderIcon.classList.add('icon');
    upcomingDiv.textContent = 'Upcoming';
    upcoming.appendChild(calenderIcon);
    upcoming.appendChild(upcomingDiv);
   



    const completed = document.getElementById('completed');
    const completedIcon = document.createElement('img');
    completedIcon.src = event;
    completedIcon.alt = 'completed';
    completedIcon.classList.add('icon');

    const completedDiv = document.createElement('span');
    completedDiv.textContent = 'Completed';
    completed.appendChild(completedIcon);
    completed.appendChild(completedDiv);

    const addBtn =  document.querySelector('.add-btn');
    const addBtnImg = document.createElement('img');
    addBtnImg.src = add;
    addBtnImg.alt = 'add';
    const addBtnDiv = document.createElement('span');
    addBtnDiv.textContent = 'Add Task';
    addBtn.appendChild(addBtnImg);
    addBtn.appendChild(addBtnDiv);
    
    addBtn.classList.add('add-btn');
    addBtn.classList.add('view');

    const inbox = document.getElementById('inbox');
    const projects = document.getElementById('new-projects');
}



createTabs();
loadToday();



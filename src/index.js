import './style.css';
import loadToday from './today';
import calender from './images/calender_Month.svg';
import tday from './images/today.svg';
import event from './images/event_completed.svg';


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
    const inbox = document.getElementById('inbox');
    const projects = document.getElementById('new-projects');
}

function loadTabs() {
    const today = document.getElementById('today');
    today.addEventListener('click', () => {
        loadToday();
    });
    const upcoming = document.getElementById('upcoming');
    upcoming.addEventListener('click', () => {
        loadToday();
    });
    const completed = document.getElementById('completed');
    completed.addEventListener('click', () => {
        loadToday();
    });
}

createTabs();

loadToday();

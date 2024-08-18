const getTodayDate = () =>{
    const today = new Date();
    return today.toISOString().split('T')[0];
}

const getTodayTasks = (todos) => {
    const today = getTodayDate();
    return todos.filter(todo => todo.dueDate === today && !todo.completed);
}

const getUpcomingTasks = (todos) => {
    const today = getTodayDate();
    return todos.filter(todo => todo.dueDate > today && !todo.completed);
};

const getCompletedTasks = (todos) =>{
    return todos.filter(todo => todo.completed);
};
export {getTodayTasks, getUpcomingTasks, getCompletedTasks};
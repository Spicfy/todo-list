class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    setDescription(description){
        this.description = description;
    }
    getDescription(){
        return this.description;
    }
    setDueDate(dueDate){
        this.dueDate = dueDate;
    }
    getDueDate(){
        return this.dueDate;
    }
    setPriority(priority){
        this.priority = priority;
    }
    getPriority(){
        return this.priority;
    }
    toggleComplete(){
        this.completed = !this.completed;
    }
}

export{Todo};


/*render() {
    // code inside the render function

    const content = document.getElementById('content');
    const taskItem = document.createElement('div');
    taskItem.innerHTML = `
    <h3>${this.title}</h3>
    <p>${this.description}</p>
    <p>${this.dueDate}</p>
    <p>${this.priority}</p>

    <button class="complete-btn" onclick="this.toggleComplete()">Complete</button>

    `;
};*/
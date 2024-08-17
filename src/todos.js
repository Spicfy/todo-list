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



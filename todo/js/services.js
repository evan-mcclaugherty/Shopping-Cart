class TodoService {
    constructor() {
        this.todoList = [];
    }
    getTodos() {
        return this.todoList;
    }
    addTodo(todo) {
        this.todoList.push(todo);
    }
    deleteTodo(todo) {
        this.todoList = this.todoList.filter(ea => {
            return ea != todo;
        })
    }
    editTodo(oldTodo, newTodo) {
        this.todoList[this.todoList.indexOf(oldTodo)] = newTodo;
    }
}

app.service('service', TodoService);

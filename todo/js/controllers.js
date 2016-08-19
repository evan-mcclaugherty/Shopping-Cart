app.controller('mainController', ['$scope', 'service', '$state', function(scope, service, state) {
    scope.todos = service.getTodos();
    scope.todo = {};
    scope.toggleAddTodo = false;
    scope.addTodo = function(todo) {
        scope.todo.add = "";
        service.addTodo(todo);
    };
    scope.editTodo = function(newTodo) {
        service.editTodo(this.eachTodo, newTodo);
        this.eachTodo = newTodo;
    };
    scope.deleteTodo = function(oldTodo) {
        service.deleteTodo(oldTodo);
        scope.todos = service.getTodos();

    }
}]);

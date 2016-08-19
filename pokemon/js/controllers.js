app.controller('myController', ['$scope', 'diceService', function(scope, diceService) {
    scope.view = {};
    scope.view.random = diceService.getRandom();
    scope.view.getRandom = function() {
        scope.view.random = diceService.getRandom();
    }
    scope.sayHi = function() {
        console.log("hello");
    }
}])

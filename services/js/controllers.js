app.controller('FirstController', ['$scope', (s, firstService) => {
    $scope.view = {};
    $scope.view.greeting = firstService.sayHi();
    $scope.view.users = firstService.getAllUsers();
}]);

var MyController = function($scope) {
  $scope.test = "this_is_came-case-now";
}
MyController.$inject = ['$scope'];

var SomeController = function($scope) {
  $scope.someVariables = ["one", "two", "three", "four"];
}
SomeController.$inject = ['$scope'];


app.controller('myController', MyController);
app.controller('someController', SomeController);

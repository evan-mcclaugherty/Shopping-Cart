angular
    .module('myApp')
    .controller('HomeController', HomeController);

function HomeController($scope, $state, TeaService) {
    $scope.view = {};
    $scope.view.isEdit = false;
    $scope.view.categories = [];
    $scope.view.bag;
    $scope.view.getTotal = function() {
        return TeaService.getTotal($scope.view.teas);
    }
    $scope.view.updateTotals = function(tea) {
        tea.subTotal = tea.choice * tea.price;
    }
    $scope.view.getPrice = function(price) {
        return price / 100;
    }
    $scope.view.addQuantity = function(tea) {
        tea.subTotal = tea.choice * $scope.view.getPrice(tea.price)
        TeaService.howManyInBag($scope.view.teas).then(quantity => {
            $scope.view.bag = quantity;
        })
        $scope.view.total =TeaService.getTotal($scope.view.teas);
    }
    $scope.view.saveTeaData = function() {
        TeaService.saveTeaData($scope.view.teas)
    }
    $scope.select = {};
    $scope.select.choice = 1;
    $scope.select.choices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    TeaService.getTeaData().then(teas => {
        $scope.view.teas = teas;
    })

    TeaService.getCategories().then(categories => {
        $scope.view.categories = categories;
    })
}

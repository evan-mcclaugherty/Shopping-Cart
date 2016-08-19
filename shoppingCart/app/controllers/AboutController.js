angular
    .module('myApp')
    .controller('AboutController', AboutController);

function AboutController($scope, $state, TeaService) {
    TeaService.getTotal().then(total => {
        $scope.view.grandTotal = total
    })
}

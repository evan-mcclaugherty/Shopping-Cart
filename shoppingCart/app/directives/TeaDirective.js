(function() {
    angular
        .module('myApp')
        .directive('teas', teas);

    function teas() {
        return {
            scope: {
                tea: '=teaData'
            },
            controller: 'HomeController',
            templateUrl: 'app/views/teas.html'
        }
    }
})();

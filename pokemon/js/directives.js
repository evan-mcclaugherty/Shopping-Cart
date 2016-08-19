app.directive('myDirective', function() {
    return {
        restrict: 'A',
        templateUrl: "partials/directives/directive.html",
        controller: 'myController',
        // scope: {
        //     inside : '=outSide'
        // },
        link: function(scope, element, attrs, controller) {
            element.on('mouseenter', function(event) {
                element.css('cursor', 'pointer');
            });
            element.on('mouseleave', function(event) {
                element.css('cursor', 'default');
            });
            element.on('mouseenter', function(event) {
                scope.sayHi();
            })
        }
    }
})

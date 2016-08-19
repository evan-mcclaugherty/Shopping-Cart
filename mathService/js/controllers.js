app.controller('myController', ['$scope', 'firstService', '$state', function(s, firstService, state) {
    s.showButton = firstService.showButton;
    s.toggleButton = firstService.toggleButton;
    s.number = {};
    s.number.operators = firstService.operators;
    s.number.operator = 'Add';
    firstService.number = s.number;
}]);

app.controller('answerController', ['$scope', 'firstService', '$state', function(s, firstService, state) {
    s.toggleButton = function() {
        firstService.toggleButton();
        state.go('home', {}, {
            reload: true
        })
    };
    s.number = firstService.number;
    s.answer = firstService[s.number.operator](s.number.first, s.number.second);
}]);

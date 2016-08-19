app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "partials/home.html",
            controller: 'myController'
        })
        .state('home.answer', {
            url: "/answer",
            templateUrl: "partials/home.answer.html",
            controller: 'answerController'
        })
});

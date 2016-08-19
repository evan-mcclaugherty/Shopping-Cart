app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: 'partials/search.html',
            controller: 'search'
        })
        .state('show', {
            url: '/show?i&tomatoes',
            templateUrl: 'partials/show.html',
            controller: 'show'
        })
})

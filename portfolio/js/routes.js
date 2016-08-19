app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/portfolio');
    $stateProvider
        .state('portfolio', {
            url: '/portfolio/{operator}/{operand1}/{operand2}',
            templateUrl: 'partials/portfolio.html',
            controller: 'portfolio'
        })
        .state('resume', {
            url: '/resume/{operator}?x&y',
            templateUrl: 'partials/resume.html',
            controller: 'resume'
        })
        .state('bio', {
            url: '/bio',
            templateUrl: 'partials/bio.html',
            controller: 'bio'
        })
        .state('bio.message', {
            url: '/message',
            templateUrl: 'partials/bio.message.html',
            controller: 'bio'
        })
})

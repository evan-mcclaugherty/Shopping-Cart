angular.module('myApp', ['ui.router'])
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'app/views/home.html',
        })
        .state('checkout', {
            url: '/checkout',
            controller: 'HomeController',
            templateUrl: 'app/views/checkout.html'
        })
        .state('about', {
            url: '/about',
            controller: 'AboutController',
            templateUrl: 'app/views/about.html'
        })
        .state('contact', {
            ulr: '/contact',
            controller: 'ContactController',
            templateUrl: 'app/views/contact.html'
        })
}

(function() {
        'use strict';

        var app = angular.module('application', [
                'ui.router',
                'ngAnimate',
                'firebase',

                //foundation
                'foundation',
                'foundation.dynamicRouting',
                'foundation.dynamicRouting.animations'
            ])
            .config(config)
            .run(run)
            .controller('login', login)
            .controller('header', header)
            .controller('trivia', trivia);

        app.factory('cookie', function() {
            var cookie;

            var obj = {
                cookie: function() {
                    return cookie
                },
                addCookie: function(ck) {
                    cookie = ck;
                }
            }

            return obj
        })

        config.$inject = ['$urlRouterProvider', '$locationProvider'];
        login.$inject = ['$scope', 'cookie', '$firebaseArray'];
        header.$inject = ['$scope', 'cookie'];
        trivia.$inject = ['$scope', 'cookie', '$firebaseArray', '$firebaseObject'];

        function config($urlProvider, $locationProvider) {

            $locationProvider.html5Mode({
                enabled: false,
                requireBase: false
            });

            $locationProvider.hashPrefix();

            $urlProvider.otherwise('/');

        }

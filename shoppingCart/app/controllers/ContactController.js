angular
    .module('myApp')
    .controller('ContactController', ContactController);

function ContactController($scope, $state) {
    console.log("hello");
}

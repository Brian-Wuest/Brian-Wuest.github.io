'use strict';
(function(){
    // Define the `MyApp` module
    var MyApp = angular.module('MyApp', ["ngRoute"]);

    MyApp.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "templates/main.html"
            });
    });
})();
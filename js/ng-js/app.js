'use strict';
(function(){
    // Define the `MyApp` module
    var MyApp = angular.module('MyApp', ["ngRoute"]);

    MyApp.config(function($routeProvider) {
        $routeProvider
            .when("/quick_encounter", {
                templateUrl: "templates/d_and_d/quick_encounter.html"
            })
            .when("/experience_calculator", {
                templateUrl: "templates/d_and_d/experience_calculator.html",
                controller: "ExperienceCalculatorController"
            })
            .when("/minecraft_prefab", {
                templateUrl: "templates/minecraft/prefab.html"
            })
            .when("/minecraft_wuest_utilities", {
                templateUrl: "templates/minecraft/wuest_utilities.html"
            })
            .otherwise({
                templateUrl: "templates/main.html"
            });
    });
})();
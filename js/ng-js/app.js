'use strict';
(function(){
    // Define the `MyApp` module
    var MyApp = angular.module('MyApp', ["ngRoute", "ui.bootstrap"]);

    MyApp.config(function($routeProvider) {
        $routeProvider
            .when("/quick_encounter", {
                title: "RPG Tools: Quick Encounter",
                templateUrl: "templates/d_and_d/quick_encounter.html",
                controller: "QuickEncounterController"
            })
            .when("/experience_calculator", {
                title: "RPG Tools: Experience Calculator",
                templateUrl: "templates/d_and_d/experience_calculator.html",
                controller: "ExperienceCalculatorController"
            })
            .when("/minecraft_prefab", {
                title: "Minecraft Mod: Prefab Showcase",
                templateUrl: "templates/minecraft/prefab.html",
                controller: "PrefabController"
            })
            .when("/minecraft_wuest_utilities", {
                title: "Minecraft Mod: WuestUtilities Showcase",
                templateUrl: "templates/minecraft/wuest_utilities.html"
            })
            .when("/about", {
                title:"About",
                templateUrl: "templates/misc/about.html"
            })
            .otherwise({
                title: "Home",
                templateUrl: "templates/main.html"
            });
    });

    MyApp.run(["$rootScope", "$route", function($rootScope, $route){
        $rootScope.$on("$routeChangeSuccess", function() {
            // When the route is successfully changed, pull the title property configired above and place it in the document title.
            document.title = $route.current.title + " | Brian-Wuest.github.io";
        });
    }]);

})();
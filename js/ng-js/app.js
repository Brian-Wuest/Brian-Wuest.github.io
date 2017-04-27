'use strict';
(function () {
    // Define the `MyApp` module
    var MyApp = angular.module('MyApp', ["ngRoute", "ui.bootstrap"]);

    MyApp.config(function ($routeProvider, $locationProvider, $controllerProvider) {
        // Fix issue in latest release of ngRoute where the prefix was updated to #!.
        $locationProvider.hashPrefix('');

        /*
            Creating a more synthesized form of service of $ controllerProvider.register
        */
        MyApp.registerCtrl = $controllerProvider.register;

        // jQuery to dynamically include controllers as needed.
        function controllers(controllers) {
            var numLoaded = 0;
            for (var i = 0; i < controllers.length; i++) {

                if (!$controllerProvider.has(controllers[i])) {
                    $.ajaxSetup({
                        async: false
                    });

                    $.getScript('./js/ng-js/controllers/' + controllers[i] + '.js').then(function (response) {
                        numLoaded++;
                        
                        if (numLoaded == controllers.length) {
                            // Only return after all scripts are loaded, this is blocking, and will fail if all scripts aren't loaded.
                            return true;
                        }
                    }, function (response) {
                        console.log(response);
                    });

                    $.ajaxSetup({
                        async: true
                    });
                }
            }
        }

        $routeProvider
            .when("/quick_encounter", {
                title: "RPG Tools: Quick Encounter",
                templateUrl: "templates/d_and_d/quick_encounter.html",
                controller: "QuickEncounterController",
                resolve: {
                    load: function () {
                        controllers(['QuickEncounterController']);
                    }
                }
            })
            .when("/experience_calculator", {
                title: "RPG Tools: Experience Calculator",
                templateUrl: "templates/d_and_d/experience_calculator.html",
                controller: "ExperienceCalculatorController",
                resolve: {
                    load: function () {
                        controllers(['ExperienceCalculatorController']);
                    }
                }
            })
            .when("/minecraft_prefab", {
                title: "Minecraft Mod: Prefab Showcase",
                templateUrl: "templates/minecraft/prefab.html",
                controller: "PrefabController",
                resolve: {
                    load: function () {
                        controllers(['PrefabController']);
                    }
                }
            })
            .when("/about", {
                title: "About",
                templateUrl: "templates/misc/about.html",
                controller: "IndexController",
                resolve: {
                    load: function () {
                        controllers(['IndexController']);
                    }
                }
            })
            .otherwise({
                title: "Home",
                templateUrl: "templates/main.html",
                controller: "IndexController",
                resolve: {
                    load: function () {
                        controllers(['IndexController']);
                    }
                }
            });
    });

    MyApp.run(["$rootScope", "$route", function ($rootScope, $route) {
        $rootScope.$on("$routeChangeSuccess", function () {
            // When the route is successfully changed, pull the title property configired above and place it in the document title.
            document.title = $route.current.title + " | Brian-Wuest.github.io";
        });
    }]);

})();
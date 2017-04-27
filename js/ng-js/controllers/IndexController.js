/**
 * @typedef {Object} Theme
 * @property {string} name
 * @property {string} href
 * @property {string} integrity
 * @property {boolean} selected
 */

/**
 * @typedef {Object} Scope
 * @property {string} contentLoaded
 * @property {Theme[]} themes
 * @property {function(Theme)} SetTheme
 * @property {function(Theme)} ThemeClick
 * @property {function} LoadThemeFromStorage
 */
(function () {
    // Get the application.
    var MyApp = angular.module('MyApp')

    if (MyApp) {
        MyApp.controller("IndexController",
            /**
             * @param  {Scope} $scope
             */
            function ($scope, $http) {
                var supports_storage = appGlobals.supports_html5_storage();
                $scope.contentLoaded = false;

                $scope.SetTheme = function (themeObject) {
                    var element = $('#bootstrap');

                    if (element) {
                        element.attr('href', themeObject.href);
                        element.attr('integrity', themeObject.integrity);
                        themeObject.selected = true;

                        if (supports_storage) {
                            localStorage.theme = themeObject.name;
                        }
                    }
                }

                $scope.ThemeClick = function (theme) {
                    for (var i = 0; i < $scope.themes.length; i++) {
                        $scope.themes[i].selected = false;
                    }

                    $scope.SetTheme(theme);
                };

                $scope.LoadThemeFromStorage = function () {
                    /* On load, set theme from local storage */
                    if (supports_storage) {
                        var theme_name = localStorage.theme;

                        if (theme_name) {
                            for (var i = 0; i < $scope.themes.length; i++) {
                                $scope.themes[i].selected = false;
                            }

                            for (var i = 0; i < $scope.themes.length; i++) {
                                if ($scope.themes[i].name == theme_name) {
                                    $scope.SetTheme($scope.themes[i]);
                                    break;
                                }
                            }
                        } else {
                            $scope.SetTheme($scope.themes[5]);
                        }
                    } else {
                        /* Don't annoy user with options that don't persist */
                        $('#theme-dropdown').hide();
                    }
                }

                $http.get('./jsonData/themes.json').then(function (response) {
                    $scope.themes = response.data;
                    $scope.LoadThemeFromStorage();

                    // Keep this at the end so the content is only shown when we get this far.
                    $scope.contentLoaded = true;
                    $("#mainNavBar").css('display', 'inherit');
                }, function (response, data1, data2) {
                    $scope.error = response;
                });
            });
    }
})();
(function(){
    // Get the application.
    var MyApp = angular.module('MyApp')

    if (MyApp) {
        MyApp.controller("IndexController", function($scope){
            var supports_storage = supports_html5_storage();

            // Setup available themes.
            $scope.themes =  [
                {
                    name: "Slate",
                    href: "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css",
                    integrity : "sha384-RpX8okQqCyUNG7PlOYNybyJXYTtGQH+7rIKiVvg1DLg6jahLEk47VvpUyS+E2/uJ",
                    selected: true
                },
                {
                    name : "Cerulean",
                    href : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css",
                    integrity : "sha384-zF4BRsG/fLiTGfR9QL82DrilZxrwgY/+du4p/c7J72zZj+FLYq4zY00RylP9ZjiT",
                    selected: false
                },
                {
                    name : "Cosmo",
                    href : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css",
                    integrity : "sha384-h21C2fcDk/eFsW9sC9h0dhokq5pDinLNklTKoxIZRUn3+hvmgQSffLLQ4G4l2eEr",
                    selected: false
                },
                {
                    name : "Flatly",
                    href : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css",
                    integrity : "sha384-+ENW/yibaokMnme+vBLnHMphUYxHs34h9lpdbSLuAwGkOKFRl4C34WkjazBtb7eT",
                    selected: false
                },
                {
                    name : "Darkly",
                    href : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/darkly/bootstrap.min.css",
                    integrity : "sha384-S7YMK1xjUjSpEnF4P8hPUcgjXYLZKK3fQW1j5ObLSl787II9p8RO9XUGehRmKsxd",
                    selected: false
                },
                {
                    name : "Spacelab",
                    href : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/spacelab/bootstrap.min.css",
                    integrity : "sha384-L/tgI3wSsbb3f/nW9V6Yqlaw3Gj7mpE56LWrhew/c8MIhAYWZ/FNirA64AVkB5pI",
                    selected: false
                },
                {
                    name : "United",
                    href : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/united/bootstrap.min.css" ,
                    integrity : "sha384-pVJelSCJ58Og1XDc2E95RVYHZDPb9AVyXsI8NoVpB2xmtxoZKJePbMfE4mlXw7BJ"
                },
                {
                    name : "Yeti",
                    href : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css",
                    integrity : "sha384-HzUaiJdCTIY/RL2vDPRGdEQHHahjzwoJJzGUkYjHVzTwXFQ2QN/nVgX7tzoMW3Ov"
                }]

                $scope.SetTheme = function (themeObject) {
                    var element = $('link[title="main"]');

                    if (element) {
                        element.attr('href', themeObject.href);
                        element.attr('integrity', themeObject.integrity);
                        themeObject.selected = true;

                        if (supports_storage) {
                            localStorage.theme = themeObject.name;
                        }
                    }
                }

                $scope.ThemeClick = function(theme) {
                    for (var i = 0; i < $scope.themes.length; i++) {
                        $scope.themes[i].selected = false;
                    }

                    $scope.SetTheme(theme);
                };

                /* On load, set theme from local storage */
                if (supports_storage) {
                    var theme_name = localStorage.theme;

                    if (theme_name) {
                        for (var i = 0; i < $scope.themes.length; i++) {
                            if ($scope.themes[i].name == theme_name) {
                                $scope.SetTheme($scope.themes[i]);
                                break;
                            }
                        }
                    }
                } else {
                    /* Don't annoy user with options that don't persist */
                    $('#theme-dropdown').hide();
                }
        });
    }
})();
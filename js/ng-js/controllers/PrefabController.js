(function () {
    // Get the application.
    var MyApp = angular.module('MyApp')

    if (MyApp) {
        MyApp.controller("PrefabController", function ($scope, $http) {
            $http.get('./templates/minecraft/prefab_images/imageList.json').then(function (response) {
                $scope.imageSlides = response.data;
                console.log($scope);
            }, function (response, data1, data2) {
                $scope.error = response;
            });

            $scope.getImageFileName = function (imageFileName) {
                return './templates/minecraft/prefab_images/' + imageFileName;
            }
        });
    }

})();
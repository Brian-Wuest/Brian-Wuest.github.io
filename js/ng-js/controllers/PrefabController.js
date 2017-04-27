(function () {
    // Get the application.
    var MyApp = angular.module('MyApp')

    if (MyApp) {
        MyApp.registerCtrl("PrefabController", function ($scope, $http) {
            $http.get('./templates/minecraft/prefab_images/imageList.json').then(function (response) {
                $scope.imageSlides = response.data;
            }, function (response, data1, data2) {
                $scope.error = response;
                console.log(response);
            });

            $scope.getImageFileName = function (imageFileName) {
                return './templates/minecraft/prefab_images/' + imageFileName;
            }
        });
    }

})();
// En el modulo pelisAngular, defino el controlador
angular.module('pelisAngular').controller("MenuController", ["$scope", "$location", "paths", function($scope, $location, paths) {
    //Inyectamos dependencia de scope
    //Scope init
    $scope.model = {
        selectedItem: paths.login
        //selectedItem: paths.movies
    };

    $scope.paths = paths;

    //Scope methods

    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item) {
            return "active";
        } else {
            return "";
        }
    };
    $scope.$watch("model.selectedItem", function(newValue, oldValue) {
        $scope.$emit("OnMenuChange", newValue);
    });

    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.selectedItem = $location.path();
    });
}]);

angular.module('pelisAngular').controller("LoginController", ["$scope", "APIClient", function($scope, APIClient) {
    //Scope init
    $scope.model = {};
    $scope.successMessage = null;
    $scope.errorMessage = null;
    //Scope methods

    //Al hacer login no es necesario que hagamos BD de usuarios ya que se un login fake
    //Simplemente en el modelo mantenemos el usuario y cambiamos la vista a peliculas
    $scope.login = function() {
        console.log("menuuu");
        $scope.hideMenu = true;
    };

}]);

angular.module('pelisAngular').controller("LoginController", ["$scope","HtmlStorage", "APIClient", function($scope, HtmlStorage, APIClient) {
    //Scope init
    $scope.model = [];
    $scope.successMessage = null;
    $scope.errorMessage = null;
    //Scope methods
    $scope.$emit("ChangeTitle", "Login");


    //Al hacer login no es necesario que hagamos BD de usuarios ya que se un login fake
    //Simplemente en el modelo mantenemos el usuario y cambiamos la vista a peliculas
    $scope.login = function(username) {
        //preguntar
        HtmlStorage.saveUser(username);
        $scope.hideMenu = true;
    };

}]);

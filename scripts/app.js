// Defino el módulo moviedb con los [] que son sus dependencias
angular.module("pelisAngular", ['ngRoute', 'ngSanitize', 'URL']).config(['$routeProvider', "paths", function($routeProvider, paths) {
    //Configuro las URLs de la aplicación
    $routeProvider.when(paths.login, {
        templateUrl: 'views/Login.html'
    }).otherwise({
        templateUrl: 'views/404.html'
    });
}]);

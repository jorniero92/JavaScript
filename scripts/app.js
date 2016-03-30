// Defino el módulo moviedb con los [] que son sus dependencias
angular.module("pelisAngular", ['ngRoute', 'ngSanitize', 'URL']).config(['$routeProvider', "paths", function($routeProvider, paths) {
    //Configuro las URLs de la aplicación
    $routeProvider.when(paths.login, {
        templateUrl: 'views/Login.html'
    }).when(paths.movieList, {
        templateUrl: 'views/MovieList.html'
    }).when(paths.newMovie, {
        templateUrl: 'views/NewMovie.html'
    }).when(paths.movieDetail, {
        controller: 'MovieDetailController',
        templateUrl: 'views/MovieDetail.html'
    }).when(paths.movieUserList, {
        templateUrl: 'views/MovieUserList.html'
    }).when(paths.movieRentList, {
        templateUrl: 'views/MovieRentList.html'
    }).otherwise({
        templateUrl: 'views/404.html'
    });
}]);

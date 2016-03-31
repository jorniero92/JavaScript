angular.module("pelisAngular").controller("AddMovieController", ["$scope", "$location", "$routeParams", "$log", "APIClient", "URL", "paths",
    function($scope, $location, $routeParams, $log, APIClient, URL, paths) {

        //scope init
        $scope.model = {};


        // Controller init
        $scope.$emit("ChangeTitle", "Add Movie");


        $scope.addMovie = function() {
            APIClient.createMovie($scope.model).then(
                function(movie) {
                    $scope.successMessage = "Movie saved! <a href=\"#/movies/" +
                        movie.id + "\">View new movie detail</a>";

                    $scope.menu = true;
                    $location.url(paths.movieList);
                },
                function(error) {
                    $scope.errorMessage = "Fatal error. The end is near";
                }
            )
        };

    }
]);

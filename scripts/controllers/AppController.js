angular.module("pelisAngular").controller("AppController",

    //Cada vez que queramos utilizar un servicio lo tenemos que inyectar tanto como parametro como
    //en la funcion
    ["$scope", "$location", "paths", function($scope, $location, paths) {
        var controller = this;

        controller.titles = {};
        controller.titles[paths.login] = "Login";

        //Model init
        $scope.model = {
            title: ""
        }

        $scope.menu = false;


        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
            console.log("$locationChangeSuccess", $location.path());
            $scope.model.title = controller.titles[$location.path()] || "404 Not Found";

        });

        $scope.$on("ChangeTitle", function(evt, title) {
            $scope.model.title = title;
        });

        $scope.login = function() {
            console.log($scope.model);
            $scope.menu=true;
            console.log($scope);
            console.log("menuuu");
            $location.url(paths.movieList);
        };
    }]
);

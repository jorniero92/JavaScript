angular.module("pelisAngular").service("APIClient", ["$http", "$q", "apiPath", "URL", function($http, $q, apiPath, URL) {
    this.apiRequest = function(url) {
        //Hay que devolver las películas, no un objeto de la petición
        //Por lo que habrá que resolver el retorno de http.get
        //Crear el objeto diferido
        var deferred = $q.defer();
        //Hacer trabajo asíncrono
        $http.get(url).then(
            function(response) {
                //Resolvemos promesa
                deferred.resolve(response.data);
            },
            function(response) {
                //Rechazar promesa
                //Esta gestión de error es bastante pobre, habría que mejorarla
                deferred.reject(response.data);
            }
        );
        //Devolver promesa      
        return deferred.promise;
        // return $http.get('/api/movies');
    }

    this.getMovies = function() {
        return this.apiRequest(apiPath.movies);
    };

    this.getMovie = function(movieId) {
        var url = URL.resolve(apiPath.movieDetail, { id: movieId });
        return this.apiRequest(url);
    };

    this.createMovie = function(movie) {

        //Crear el objeto diferido
        var deferred = $q.defer();
        //Hacer trabajo asíncrono
        $http.post(apiPath.movies, movie).then(
            function(response) {
                //Resolvemos promesa
                deferred.resolve(response.data);
            },
            function(response) {
                //Rechazar promesa
                //Esta gestión de error es bastante pobre, habría que mejorarla
                deferred.reject(response.data);
            }
        );
        //Devolver promesa      
        return deferred.promise;
        // return $http.get('/api/movies');
    };

}]);

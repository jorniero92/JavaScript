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

    this.rentMovie = function(movie, username) {
        // Crear el objeto diferido
        var deffered = $q.defer();
        movie['userRent'] = username;

        // hacer asincrono el trabajo
        console.log("ruta:", apiPath.movies);
        console.log("movie:", movie);
        var url = URL.resolve(apiPath.movieDetail, { id: movie.id });

        $http.put(url, movie).then(
            //console.log("Api paths", apiPath.movies);
            //peticion ok
            function(response) {
                //resolver la promesa
                console.log("data DATOS DEL PUT", response.data);
                deffered.resolve(response.data);
            },
            //peticion KO
            function(response) {
                //rechazar la promesa
                deffered.reject(response.data);
            }
        );
        //devolver la promesa
        return deffered.promise;
    }

    /*crear una nueva pelicula, hacer un post a la URL */
    this.createMovie = function(movie) {
        // Crear el objeto diferido
        var deffered = $q.defer();
        console.log("model.username", model.username);

        // hacer asincrono el trabajo
        $http.post(apiPath.movies, movie).then(
            //console.log("Api paths", apiPath.movies);
            //peticion ok
            function(response) {
                //resolver la promesa
                console.log("data DATOS DEL POST", response.data);
                deffered.resolve(response.data);
            },
            //peticion KO
            function(response) {
                //rechazar la promesa
                deffered.reject(response.data);
            }
        );
        //devolver la promesa
        return deffered.promise;
    };

}]);

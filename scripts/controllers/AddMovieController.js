angular.module("pelisAngular").controller("RentedListController", ["$scope", "$log", "APIClient", "URL", "paths",
    function($scope, $log, APIClient, URL, paths) {

        /* Scope model init */
        $scope.model = [];

        $scope.uiState = 'loading';
      
    }
]);
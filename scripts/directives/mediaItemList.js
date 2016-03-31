angular.module("pelisAngular").directive("mediaItemList", function() {
    return {
        restrict: "AE",
        scope: {
            model: "=items",
            getDetailUrl: "&",
            rentMovie: "&"
        },
        templateUrl: "views/mediaItemList.html"
    };
});

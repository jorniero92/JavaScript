angular.module("pelisAngular").directive("mediaItemList", function(){
	return{
		restrict: "AE",
		scope: {
			/* cuando uso model, sea model en el scope
			model: "="
			*/
			//Pero para que en el scope se llame items hay que hacerlo asi:
			model: "=items",
			//asi lo hemos mapeado y cambiadod de nombre en el scope

			//hay q hacer la llamada, poner los () a getDetailURL
			getDetailUrl: "&"
		},
		templateUrl: "views/mediaItemList.html"

	};
});
angular.module("pelisAngular").service("HtmlStorage", ["$http", "$q", "apiPath", "URL", function($http, $q, apiPath, URL) {

this.user = null;
localStorage.setItem("username", model.username);
console.log("localStorage.getItem", localStorage.getItem);
localStorage.getItem("username", model.username);

}]);

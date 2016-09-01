var app = angular.module('heroApp', ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/addHeroes", {
      templateUrl: "/views/partials/addHeroes.html",
      controller: "CreateheroController"
    }).
    when("/displayHeroes", {
      templateUrl: "/views/partials/displayHeroes.html",
      controller: "DisplayheroController"
    }).
    otherwise({
      redirectTo: "/addHeroes"
    });
}]);

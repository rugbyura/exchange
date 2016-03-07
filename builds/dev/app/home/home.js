;(function(){
  "use strict";


  angular
    .module("exchange.home", [

    ])
    .controller("HomeCtrl", HomeController)
    .config(HomeConfig)
    .filter("eye", EyeFilter)

    // @ngInject
    function HomeController($rootScope){
      var s = this;
      $rootScope.currentPage = "home";
      s.users = jsonUser;
      s.data = +new Date();
  }

  var jsonUser = [
    {
      "_id": "56d0bc31e119eacca18f7d5c",
      "index": 0,
      "balance": "$2,977.74",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": {
        "first": "Matthews",
        "last": "Carney"
      }
    },
    {
      "_id": "56d0bc31d53955c9bc3b1004",
      "index": 1,
      "balance": "$1,515.33",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "brown",
      "name": {
        "first": "Shauna",
        "last": "Huber"
      }
    },
    {
      "_id": "56d0bc3100d3c18ee9a7e99b",
      "index": 2,
      "balance": "$3,999.78",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "green",
      "name": {
        "first": "Fitzgerald",
        "last": "Blanchard"
      }
    },
    {
      "_id": "56d0bc31eba854f9ee68f8f0",
      "index": 3,
      "balance": "$1,399.51",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "brown",
      "name": {
        "first": "Dee",
        "last": "Duncan"
      }
    },
    {
      "_id": "56d0bc310057528436f29ee3",
      "index": 4,
      "balance": "$1,620.81",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "brown",
      "name": {
        "first": "Nell",
        "last": "Barrett"
      }
    }
  ];

  // @ngInject
  function HomeConfig($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl",
        controllerAs: "hc"
      })
  }

  // @ngInject
  function EyeFilter(){
    return function(input){
      var color;
      if(input === "green"){
        color = "зеленый"
      }else if(input === "brown"){
        color = "коричневый"
      }else{
        color = "не определен"
      }

      return(color)
    }
  }

})();

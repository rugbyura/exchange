;(function(){
  "use strict";


  angular
    .module("exchange.home", [

    ])
    .controller("HomeCtrl", HomeController)
    .config(HomeConfig)

    // @ngInject
    function HomeController($rootScope){
      var s = this;
      $rootScope.currentPage = "home";

  }

  // @ngInject
  function HomeConfig($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl"
      })
  }

})();

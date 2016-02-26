;(function(){
  "use strict";

  angular
    .module("exchange.about", ["ngRoute"])
    .controller("AboutCtrl", AboutController)
    .config(AboutConfig)

      // @ngInject
      function AboutController($rootScope){
        var s = this;
        $rootScope.currentPage = "about";
      }

      // @ngInject
      function AboutConfig($routeProvider){
        $routeProvider
          .when("/about", {
            templateUrl: "app/about/about.html",
            controller: "AboutCtrl"
          })
      }

})();

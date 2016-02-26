;(function () {
  "use strict";

  angular
    .module("Exchange", ["ngRoute", "ui.bootstrap", "exchange.home", "exchange.about"])
    .controller("MainCtrl", MainController)
    .run(MainRun)
    .config(MainConfig)


  // @ngInject
  function MainRun($rootScope) {

    $rootScope.alerts = [];
    $rootScope.addAlert = function (_msg, _type) {
      _type = _type || "warning";

      $rootScope.alerts.push({msg: _msg, type: _type});
    };

    $rootScope.closeAlert = function (index) {
      $rootScope.alerts.splice(index, 1);
    };
  }


  // @ngInject
  function MainController($rootScope, $http) {
    var s = this;

  }

  // @ngInject
  function MainConfig($routeProvider) {
    $routeProvider
      .otherwise({redirectTo: "/"})
  }


})();
!function(){"use strict";function t(t){t.alerts=[],t.addAlert=function(e,o){o=o||"warning",t.alerts.push({msg:e,type:o})},t.closeAlert=function(e){t.alerts.splice(e,1)}}function e(t,e){}function o(t){t.otherwise({redirectTo:"/"})}t.$inject=["$rootScope"],e.$inject=["$rootScope","$http"],o.$inject=["$routeProvider"],angular.module("Exchange",["ngRoute","ui.bootstrap","exchange.home","exchange.about"]).controller("MainCtrl",e).run(t).config(o)}(),function(){"use strict";function t(t){t.currentPage="about"}function e(t){t.when("/about",{templateUrl:"app/about/about.html",controller:"AboutCtrl"})}t.$inject=["$rootScope"],e.$inject=["$routeProvider"],angular.module("exchange.about",["ngRoute"]).controller("AboutCtrl",t).config(e)}(),function(){"use strict";function t(t){t.currentPage="home"}function e(t){t.when("/",{templateUrl:"app/home/home.html",controller:"HomeCtrl"})}t.$inject=["$rootScope"],e.$inject=["$routeProvider"],angular.module("exchange.home",[]).controller("HomeCtrl",t).config(e)}();
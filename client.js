var myApp = angular.module('myApp', []);

myApp.controller('AppController', ['$http', function($http) {
  console.log('app controller running');
  var self = this;

  self.message = "Welcome to your new Chrome Extension!";


}]);

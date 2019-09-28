'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ '$scope', '$http' , function( $scope, $http) {

  $scope.game = {
    'type' : 'none',
    'address' : null,
    'ether_bet' : null 
  };

  $scope.GameType = function(type){
    $scope.game.type = type;
    $scope.new_game();
  }

  $scope.new_game = function (){

    console.log(baseURL);
    $http({
      method: "POST",
      url: baseURL + "newgame",
      data: {}
  }).then(function mySuccess(json) {
     Console.log(json)
  }).catch(function myerr(err) {
     // $rootScope.loader = false;
      console.log('something went wrong in bringing transactions');
  });
  }

}]);
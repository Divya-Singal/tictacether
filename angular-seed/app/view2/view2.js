'use strict';

angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', ['$scope', '$http', function ($scope, $http) {

    $scope.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    $scope.complete = false;

    $scope.commentary = [];

    $scope.game = 1;
    $scope.matrixSize = 3;
    $scope.turn = {};

    $scope.players = [
      {
        'player': 'A',
        'symbol': 'O',
        'seq': 1,
      },
      {
        'player': 'B',
        'symbol': 'X',
        'seq': 2
      }
    ]

    $scope.updateBoard = function (index1, index2) {

      // console.log(index1);
      // console.log(index2);

      if($scope.complete){

        if(confirm('Reset game?')){
          $scope.playAgain();
        }else{
          return;
        }
      }
      if ($scope.board[index1][index2] != '') {
        alert('Slot Taken!');
        return;
      }

      $scope.board[index1][index2] = $scope.turn.symbol;

      if ($scope.turn.seq == 1) {
        $scope.turn = $scope.players[1];
      } else {
        $scope.turn = $scope.players[0];
      }

      $scope.checkboard();
    }

    $scope.checkboard = function () {

      // check all horizontol
      for (var i = 0; i < $scope.matrixSize; i++) {
       // if ($scope.board[i][0] == '' || ) {
         // continue;
        //} else {
          var count_horiz = 0;
          var count_veriz= 0;
          for (var j = 0; j < $scope.matrixSize; j++) {
            if ( $scope.board[i][0] != '' && $scope.board[i][0] == $scope.board[i][j]) {
              count_horiz++;
            }

            if ($scope.board[0][i] != '' && $scope.board[0][i] == $scope.board[j][i]) {
              count_veriz++;
            }

          }
          if (count_horiz == $scope.matrixSize){

            $scope.won(' Wins Horizontal Line in game');
        
          } else if( count_veriz == $scope.matrixSize) {
            $scope.won(' Wins Vertical Line in game');
        
          }
        
      }
    
      // check diagonal/ anti-diagonal

      var countdiag = 0;
      var countanti_diag = 0;

      if ($scope.board[0][0] != '') {
        for (var i = 0; i < $scope.matrixSize; i++) {
          for (var j = 0; j < $scope.matrixSize; j++) {
            if (i == j) {
              if ($scope.board[0][0] != '' && $scope.board[0][0] == $scope.board[i][j]) {
                countdiag++;
              }
            }

            if ((i + j) == ($scope.matrixSize - 1)) {
              //console.log(`inside anti diag for ${i} , ${j}`);
              if ($scope.board[$scope.matrixSize - 1][0] != '' && $scope.board[$scope.matrixSize - 1][0] == $scope.board[i][j]) {
                countanti_diag++;
              }
            }
          }
        }

        if (countdiag == $scope.matrixSize ){
          $scope.won(' Wins Diagonal Line in game');
        } else if (countanti_diag == $scope.matrixSize) {
          $scope.won(' Wins Anti Diagonal Line in game');
        }
      }
    }
    

    $scope.playAgain = function () {
     
      $scope.game++;
      $scope.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      $scope.complete = false;
    }

    $scope.won = function(msg){

      $scope.commentary.push($scope.turn.player + msg + $scope.game );
      $scope.complete = true;
  
    }


    $scope.clearcomments = function(){
      $scope.commentary = [];

    }
    $scope.init = function () {

      $scope.turn = $scope.players[0];
    }
    $scope.init();
  }]);
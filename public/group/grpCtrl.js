
angular.module('app')
    .controller('GroupCtrl', ['$location', '$scope', '$localStorage', 'socket',
        function ($location, $scope, $localStorage, socket) {
          $scope.username = '';
          var nickname;

          $scope.joinchat = function(){
              nickname = $scope.username;
              $localStorage.nickname = $scope.username;
              $location.path('./home')
          }
        
    }]);  


angular.module('app')
    .controller('MainCtrl', ['$location', '$scope', '$localStorage', 'socket', 'lodash',
        function ($location, $scope, $localStorage, socket, lodash) {
            $scope.message = '';
            $scope.messages = [];
            $scope.users = [];

            $scope.myname = $localStorage.nickname
            var myname = $scope.myname;

            socket.emit('getallusers');

            socket.on('joined-user', function (data) {
                $scope.users = data.filter(function (item) {
                    return item.myname !== myname;
                })
            })

            $scope.sendMsg = function (data) {
                var newmsg = {
                    message: $scope.message,
                    from: $scope.myname
                }
                socket.emit('send-message', newmsg);
                $scope.message = '';
                $scope.messages.push(newmsg)

            }

            socket.on('message-get',function(data){
                $scope.messages.push(data);
            })

        }]);  

// var socket = io('http://localhost:8080');

// socket.on('message_from_server',function(event){
//     document.getElementById('lbl').innerText = event.display;

//     socket.emit('message_from_client',{
//         display:"Hi Server from Client"
//     });
// });

angular.module('app',['ngCookies','ngRoute','ngStorage','ngSanitize','ngLodash'])
.config(function($routeProvider,$locationProvider){
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/home',{
            templateUrl:'main/main.html',
            controller:'MainCtrl'
        })
        .when('/group',{
            templateUrl:'group/group.html',
            controller:'GroupCtrl'
        })
        .otherwise({
            redirectTo:'/group'
        });
})
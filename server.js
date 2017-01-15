var express = require('express');
var path = require('path');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var portno = 8080;

var users = [];
app.use(express.static(path.join(__dirname, "public")));

//opening connection
io.on('connection', function (socket) {
    console.log("connection made");

    // emitting message to client
    socket.emit('message_from_server', {
        display: "Hi Client from server"
    });

    // catch message from client
    socket.on('joingrp', function (data) {
        console.log("join grp -"+data);
        socket.myname = data.myname;
        users[socket.myname] = socket;
        var usrObj = {
            myname:data.myname,
            socketid:socket.id
        }
        users.push(usrObj);
        io.emit('joined-user',users);
    });

   socket.on('getallusers', function (data) {
        socket.emit('joined-user',users);
    });

    socket.on('send-message',function(data){
        socket.broadcast.emit('message-get',data);
        //io.emit('message-get',users);
    })
   

});
server.listen(portno, function () {
    console.log("port is listening on :" + portno);
});
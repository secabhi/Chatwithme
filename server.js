var express = require('express');
var path = require('path');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var portno = 8080;

app.use(express.static(path.join(__dirname, "public")));

//opening connection
io.on('connection', function (socket) {
    console.log("connection made");

    // emitting message to client
    socket.emit('message_from_server', {
        display: "Hi Client from server"
    });

    // catch message from client
    socket.on('message_from_client', function (message) {
        console.log("message from client is -"+message.display);
    });
});
server.listen(portno, function () {
    console.log("port is listening on :" + portno);
});
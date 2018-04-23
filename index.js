const express= require('express');
const socket= require('socket.io');

var app= express();
var server =app.listen(3000,function(){
    console.log('Server stated at port :'+ 3000)
});
app.use(express.static('public'));

//socket setup

var io= socket(server);

//socket connection setup
io.on('connection',function(socket){
    console.log('Socket connection established with id :'+ socket.id);
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });
    socket.on('typing',function(data){
        socket.broadcast.emit('typing', data);
    })
});
var Header = document.getElementById('header');
var charWindow = document.getElementById('window');
var handle = document.getElementById('handleText');
var msg = document.getElementById('msgText');
var send = document.getElementById('send');
var feedback = document.getElementById('feedback');

//scoket connection

var socket = io.connect('http://localhost:3000');

//click event listen 
send.addEventListener('click', function () {
    socket.emit('chat', {
        handle: handle.value,
        mssg: msg.value
    })
});
msg.addEventListener('keypress',function(){
    socket.emit('typing',{
        handle:handle.value        
    });
});


//handling socket events
socket.on('chat', function (data) {
    feedback.innerHTML='';
    charWindow.innerHTML += '<p> <strong>' + data.handle + '</strong> : ' + data.mssg + '</p>';
});

socket.on('typing',function(data){
    feedback.innerHTML='<p>'+data.handle+' is typing... </p>'
});
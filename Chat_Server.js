var net = require('net');

var server = net.createServer();

var sockets = [];
server.on('connection',function(socket){
	console.log('Got a new connection');
	
	sockets.push(socket);
	
	
	socket.on('data',function(data){
		console.log('Got data :', data);
		
		sockets.forEach(function(otherSocket){
			if(otherSocket !== socket){
				otherSocket.write(data);
			}
		});
	});
	
	
	socket.on('close',function(){
		console.log('connection closed');
		var index = sockets.indexOf(socket);
		sockets.splice(index,1);
	});
});


server.on('error',function(err){
	console.log('Server Error: ', err.message);
});

server.on('close',function(){
	console.log('Server closed');
});

server.listen(4000);
var socket = io();//we can do this because we imported socket.io in the html

$("form").submit(function(){
	socket.emit("chat message", $("#messageField").val()); //on event, send server event name and data
	$("#messageField").val("");
	return false;

});


//we are going to handle the socket events here
// io.on("connection", function(socket){
// 	socket.on("chat message", function(msg){
// 		io.emit("chat message", msg);
// 	});
// });


//socket.on(event, callback function) callback gets run when event happens
socket.on("chat message", function(msg){
	console.log(msg);
	$("#messages").append($("<li>").text(msg));
});
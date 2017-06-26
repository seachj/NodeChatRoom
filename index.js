//import downloaded packages using the require keyword

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http); //IO (input/output) is how we are going to communicate between clients
//in this case, IO is basically the server, passing data between two or more clients


//app.get(path, callback)
app.get("/",function(req, res){
	res.sendFile(__dirname+"/index.html");
});

//use express to serve up static files(css, js, other htmls besides index) so that our page can be pretty
app.use(express.static(__dirname+"/public"));



io.on("connection", function(socket){
	console.log("hi");
	socket.on("chat message", function(msg){
		console.log(msg);
		io.emit("chat message", msg);
	});
});





//tell the server where it should run on the host
http.listen(process.env.PORT || 3000, function(){
	console.log("listening on *:3000");
});


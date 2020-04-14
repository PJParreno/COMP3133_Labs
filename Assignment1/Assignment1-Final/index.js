// Chat Application by:
// Patrick Parreno - 101085299
// Asim Patel -  10116270

// Setting basic configuration for our application
var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);
const mongoose = require('mongoose');
const port = 4500;


// Set constant for our database connection
const mongoDB = "mongodb+srv://ChatAppDB:123skate@chatapplicationdb-x5azk.mongodb.net/chatDB?retryWrites=true&w=majority";


// mongoose Schemas 
const event = require('./models/eventLog');
const message = require('./models/message');


// connect to database with mongoose
mongoose.connect(mongoDB, function(err, db){

    if(err){
        throw err;
    }
    console.log('connected to ChatApplicationDB...')
});

// Listen to our port
http.listen(port, () =>{
    console.log('listening on port: ' + port);
});

// Application Routing
app.get('/',  function(res, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/roomhistory/:roomName', function(req, res){
    res.sendFile(__dirname + '/views/roomhistory.html');
    message.find({ "room" : "To: League Of Legends"}).then(documents => {
        console.log("League Of Legends - Chat history: " + documents);
    });
    message.find({ "room" : "To: CS:GO"}).then(documents => {
        console.log("CS:GO - Chat history: " + documents);
    });
    message.find({ "room" : "To: NBA 2k20"}).then(documents => {
        console.log("NBA 2k20 - Chat history: " + documents);
    });
});
app.get('/roomhistory', function(req, res) {
    res.sendFile(__dirname + '/views/roomhistory.html');
    message.find().then(documents => {
        console.log(documents)
    });
 });
 app.get('/eventlog', function(req, res) {
    res.sendFile(__dirname + '/views/eventlog.html');
    event.find().then(documents => {
        console.log(documents);
    });
 });

// usernames which are currently connected to the chat
var usernames = {};

// rooms which are currently available in chat
var rooms = ['League Of Legends','CS:GO','NBA 2k20'];

io.on('connection', function (socket) {
    
    console.log('A user has connected...');
    //logging data socket has been connected

	// when the client emits 'adduser', this listens and executes
	socket.on('adduser', function(username){

        const newConnection = new event ({
            type: "CONNECTION",
            event: "A client connected",
            user: username
        });
        console.log(newConnection);
        newConnection.save();
		// store the username in the socket session for this client
		socket.username = username;
		// store the room name in the socket session for this client
		socket.room = 'League Of Legends';
		// add the client's username to the global list
		usernames[username] = username;
		// send client to room 1
		socket.join('League Of Legends');
		// echo to client they've connected
		socket.emit('updatechat', 'SERVER', 'you have connected to the League of Legends chat');
		// echo to room 1 that a person has connected to their room
		socket.broadcast.to('League Of Legends').emit('updatechat', 'SERVER', username + ' has connected to this room');
		socket.emit('updaterooms', rooms, 'League Of Legends');
	});
	
	// when the client emits 'sendchat', this listens and executes
	socket.on('sendchat', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
        io.sockets.in(socket.room).emit('updatechat', socket.username, data);
        const newMessage = new message ({
            msg: 'Message: ' + data,
            by: 'Sent By: ' + socket.username,
            room: "To: " + socket.room
        });
        console.log(newMessage);
        newMessage.save();
	});
	
	socket.on('switchRoom', function(newroom){
		socket.leave(socket.room);
		socket.join(newroom);
		socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
		// sent message to OLD room
		socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
		// update socket session room title
		socket.room = newroom;
		socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
        socket.emit('updaterooms', rooms, newroom);
        const switchRooms = new event ({
            type: "SWITCHED ROOMS",
            event: socket.username + " has switched to room " + newroom,
            user: socket.username
        });
        console.log(switchRooms)
        switchRooms.save();
	});

	// when the user disconnects.. perform this
	socket.on('disconnect', function(){
		// remove the username from global usernames list
		delete usernames[socket.username];
		// update list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		// echo a user has left the chat
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
        socket.leave(socket.room);
        const endConnection = new event ({
            type: "DISCONNECTION",
            event: socket.username + " has disconnected",
            user: socket.username
        });
        console.log(endConnection)
        endConnection.save();
	});
});

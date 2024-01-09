const express = require('express');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173"
    }
});

// Use the cors middleware to allow all origins

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log(socket.id);
  console.log('A user connected');

  // Send a message to the client when a new user connects
  console.log(socket.emit('messageFromServer', 'Welcome to the server!'));

  socket.on('codeChange', (code) => {
    console.log('code change detected');
    socket.broadcast.emit('codeChange',code);
  });

});



// Your other routes or middleware go here

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

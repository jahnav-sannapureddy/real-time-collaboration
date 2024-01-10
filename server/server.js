const express = require('express');
const http = require('http');
const {Server} = require('socket.io');

const dbConnect = require('./db/dbConnect')
const bcrypt = require('bcrypt')
const User = require('./db/modals/user.modal');
const chalk = require('chalk');

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World!"));

dbConnect()

app.post("/register", (req, res) => {

    bcrypt.hash(req.body.password, 10)
    .then((hashedPass) => {
      const user = new User({email: req.body.email, password: hashedPass});

      user.save()
      .then((result) => {
        res.status(200).send({
          msg: "User created successfully", 
          result
        })
      })
      .catch((er) => {
        console.log(chalk.red("Error in creating user"))
        res.status(500).send({msg: "Error in creating user", er})
      })
    })
    .catch((er)=>{
      console.log(chalk.red("Error in hashing password"))
      res.status(500).send({
        msg: "Error in hashing password",
        er,
      })
    })
})
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
    socket.broadcast.emit('codeChange',code);
  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

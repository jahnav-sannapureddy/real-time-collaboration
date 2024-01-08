const socket = require('socket.io')(3000 , {
    cors:{
        origin:['http://localhost:5173']
    }
})

socket.on('connection', soc => {
    console.log(soc.id)
})

socket.emit('message', 'Serevredtysajcbuasci');



socket.on('client-message', data => {
    console.log(data)
})
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    options: {
        cors: '*'
    }
});

const port = 4000;

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        const roomName = data.roomName;
        socket.join(roomName);
        socket.to(roomName).broadcast.emit('new-user', data);
        console.log('usuario conectado ', data);

        socket.on('disconnect', () => {
            socket.to(roomName).broadcast.emit('bye-user', data);
        })
    })
});

server.listen(port, () => {
    console.log(`Server running port ${port}`);
})
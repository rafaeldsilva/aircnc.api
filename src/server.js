const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketIo = require('socket.io');
const http = require('http');
const routes = require('./routes');
const app = express();
const Port = process.env.PORT || 3333
const server = http.Server(app);
const io = socketIo(server);
 
mongoose.connect('mongodb+srv://usr_aircnc_db:aircnc2k19@cluster0-hlave.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(Port);
 
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const connection = require('./config/db-mongoose');
const Group = require('./models/group');
const Chat = require('./models/chat');

app.set('view engine', 'ejs');
//app.use('/', express.static(__dirname + '/views'));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

io.on('connection', (socket) => {
    socket.on('error', console.error);

    console.log("a user is connected", socket.id);

    socket.on('disconnect', () => {
        console.log("user disconnected", socket.id);
    });

    // joining a room
    
    socket.on('join_room', (data) => {
        console.log("joining a room", data.roomid);
        socket.join(data.roomid);
    });

    
    // handling input messages
    
    socket.on('chat_msg', async (data) => {
        console.log('recieved a message', data);
        
        // create chat message
        
        const chat = await Chat.create({
            roomid : data.roomid,
            sender : data.sender,
            content : data.message
        });
        io.to(data.roomid).emit('msg received', data);
    });
});

app.get('/chat/:roomid/:user', async (req, res) => {

    const group = await Group.findById(req.params.roomid);
    const chat = await Chat.find({
        roomid : req.params.roomid
    });
    console.log(group);
    console.log(chat);
    
    res.render('client', { 
        roomid: req.params.roomid, 
        user: req.params.user,
        groupname: group.name,
        previousMessage: chat
     });
});

app.get('/group', async (req, res) => {
    res.render('group');
});

app.post('/group', async (req, res) => {
    console.log(req.body);
    await Group.create({

        name : req.body.name

    });
    res.redirect('/group');
});

// Start the server
server.listen(3000, async () => {
    console.log(`${new Date()} Server is listening on port 3000`);
    await connection();
    console.log("Database connected");
});

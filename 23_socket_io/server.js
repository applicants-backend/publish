const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

// http server
const server = http.createServer(app);

// socket server
const io = SocketIO(server)

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('client')
});

app.get('/practice1', (req,res) => {
    res.render('practice1')
})
app.get('/practice2', (req,res) => {
    res.render('practice2')
})

app.get('/chat', (req,res) => {
    res.render('chat')
})


io.on('connection', (socket) => {
    // socket.on('open_message', (arg) => {
    //     console.log(arg)
    // });

    // socket.on('form_message', (arg) => {
    //     console.log(arg)
    //     io.sockets.emit
    //     socket.emit("backend_message", arg);
    // })

    ///////////////////////////////////////////////////////////////

    // Practice 1
    // socket.on('vote_message', (arg) => {
    //     console.log(arg)
    //     io.sockets.emit
    //     socket.emit("vote_message", arg)
    // })

    // socket.on("hello", (data) => {
    //     console.log(`${data.name} : ${data.message}`)
    //     socket.emit("cbHello", {name : "client", message : "안녕하세요" })
    // })
    // socket.on("study", (data) => {
    //     console.log(`${data.name} : ${data.message}`)
    //     socket.emit("cbStudy", {name : "client", message : "공부중이에요" })
    // })
    // socket.on("bye", (data) => {
    //     console.log(`${data.name} : ${data.message}`)
    //     socket.emit("cbBye", {name : "client", message : "잘가요" })
    // })

    ///////////////////////////////////////////////////////////////

    // Practice 2
    console.log('before join', socket.rooms);
    socket.on("join", (res) => {
        // 채팅방을 생성하는 방법은 join(방아이디) 사용
        socket.join(res);
        socket.room = res;
        console.log('after join', socket.rooms)
        // boradcast 는 나를 제외한 전체사용자 (브라우져)에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우져가 입장하였습니다.')
        // console.log(socket)
        const roomInfo = io.sockets.adapter.rooms.get(res)?.size;
        console.log(roomInfo)
        // console.log(Object.keys(roomInfo).length)
    });
    socket.on('message', (res) => {
        // io.to(특정아이디).emit(이벤트) 특정방의 전체 사용자에게 메세지.
        io.to(socket.room).emit('chat', res)
    });

    socket.on('leave', () => {
        socket.leave(socket.room)
        const roomInfo = io.sockets.adapter.rooms.get[socket.room];
        console.log(roomInfo)
    })
});

// server
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`) 
})


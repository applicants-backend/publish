const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/:room", (req, res) => {
    const room = req.params.room;
});

function getUsersInRoom(room) {
    const users = [];
    // 찾고자하는 채팅방에 접속한 socket.id 값을 찾아야함.
    const clients = io.sockets.adapter.rooms.get(room);
    console.log(clients)
    if (clients) {
        clients.forEach((socketId) => {
            // io.sockets.sockets : socket.id 가 할당한 변수들의 객체값

            // socket.id 가 할당한 변수들의 객체값
            const userSocket = io.sockets.sockets.get(socketId);
            users.push(userSocket.user);

            // key 소켓아이디 , name : 이름
            const info = {name : userSocket.user, key : socketId}
            users.push(info);
        });
    };
    return users;
}
const roomList = [];

io.on("connection", (socket) => {

    // socket.on('join', (res) => {
    //     socket.join(res);
    //     socket.room = res;
    //     console.log('Server Socket Connected', socket.id)
    //     io.emit('notice', `${socket.id}님이 입장하셨습니다.`);
    // })

    // console.log(io.sockets)
    //socket!//
    //socket은 접속한 웹페이지, io는 접속해있는 모든 웹페이지
    //웹 페이지가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
    //console.log(io.sockets);
    //채팅방 목록 보내기
    socket.emit("roomList", roomList);
    //채팅방 만들기 생성
    socket.on("create", (roomName, userName, cb) => {
        //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
        //socket.rooms에 socket.id값과 방이름 확인가능
        socket.join(roomName);
        //socket은 객체이며 원하는 값을 할당할 수 있음
        socket.room = roomName;
        socket.user = userName;

        // make room with join 입장시 알림뜸.
        socket.to(roomName).emit('notice', `${socket.id}님이 입장하셨습니다.`)
        //채팅방 목록 갱신
        if (!roomList.includes(roomName)) {
            roomList.push(roomName);
            //갱신된 목록은 전체가 봐야함
            io.emit("roomList", roomList);
        }
        const usersInRoom = getUsersInRoom(roomName);
        io.to(roomName).emit("userList", usersInRoom);
        cb();
    });

    socket.on("sendMessage", (message) => {
        console.log(message)
        if (message.user === 'all') {
            io.to(socket.room).emit(
                "newMessage",
                message.message, message.nick, false
            );
        } else {
            io.to(message.user).emit(
                "newMessage",
                message.message, message.nick, true,
            );
            socket.emit('newMessage', message.message, message.nick)
        }
    });

    // socket.on("directMessage", (message, ) => {
    //     socket.user = userName
    //     io.to(Selection.socket.user).emit(
    //         "newMessage",
    //         message.message, message.nick, 
    //     );
    // });

    socket.on("disconnect", () => {
        if (socket.room) {
            socket.leave(socket.room);
        }
    });
});

server.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});

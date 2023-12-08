import { Server } from 'socket.io';

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // Adjust according to your needs
      methods: ["GET", "POST"],
    },
  });

  let roomUserMap = {};

  const updateUserList = (roomName) => {
    io.to(roomName).emit('roomData', { users: Array.from(io.sockets.adapter.rooms.get(roomName) || []).map(socketId => ({ id: socketId, name: roomUserMap[socketId] })) });
  };

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joinRoom', ({ roomName, username }) => {
      console.log(`${username} joined room: ${roomName}`);
      socket.join(roomName);
      roomUserMap[socket.id] = username;
      updateUserList(roomName);
    });

    socket.on('sendMessage', ({ roomName, messageData }) => {
      console.log(`Message received in room ${roomName}: ${messageData.text}`);
      io.to(roomName).emit('message', messageData);
    });

    socket.on('disconnect', () => {
      console.log(`${roomUserMap[socket.id] || 'A user'} disconnected`);
      const rooms = socket.rooms;
      rooms.forEach(room => {
        socket.leave(room);
        updateUserList(room);
      });
      delete roomUserMap[socket.id];
    });
  });
}

export default initializeSocket;

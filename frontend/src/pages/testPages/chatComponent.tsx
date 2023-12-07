import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Socket, io } from 'socket.io-client';
import { TextField, Button, Box, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';

interface Message {
  user: string;
  text: string;
}

interface User {
  id: string;
  name: string;
}

const ChatPage: React.FC = () => {
  const { roomName, username } = useParams<{ roomName: string; username: string }>();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3002');
    newSocket.emit('joinRoom', { roomName, username });

    newSocket.on('message', (messageData: Message) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    newSocket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, [roomName, username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    if (socket && message) {
      const messageData = { user: username, text: message };
      socket.emit('sendMessage', { roomName, messageData });
      setMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', maxWidth: 1000, mx: 'auto', my: 4 }}>
      <Box sx={{ width: '30%', borderRight: 1, borderColor: 'divider' }}>
        <Typography variant="h6" gutterBottom>Online Users</Typography>
        <List>
          {users.map((user, index) => (
            <ListItem key={index}>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ width: '70%', pl: 2 }}>
        <Typography variant="h4" gutterBottom>Chat Room: {roomName}</Typography>
        <Paper style={{ maxHeight: 300, overflow: 'auto', marginTop: 2 }}>
          <List>
            {messages.map((msg, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${msg.user}: ${msg.text}`} />
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Paper>
        <Box component="form" onSubmit={handleSendMessage} sx={{ mt: 2, display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" type="submit" disabled={!message}>Send</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatPage;

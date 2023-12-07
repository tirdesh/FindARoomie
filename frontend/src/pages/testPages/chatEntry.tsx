import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';

const ChatEntryPage: React.FC = () => {
  const [roomName, setRoomName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (roomName && username) {
      navigate(`/chat/${roomName}/${username}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', my: 4 }}>
      <Typography variant="h4" gutterBottom>Enter Room</Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleJoin} fullWidth>Join/Create Room</Button>
    </Box>
  );
};

export default ChatEntryPage;

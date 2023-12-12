import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomPost from '../../models/roomPost';
import ImageViewer from '../testPages/imageViewer';
import { Button } from '@mui/material';
import RoomieCard from '../../components/RoomiePosting/RoomieCard';

const ListOfPosts: React.FC = () => {
  const [roomPosts, setRoomPosts] = useState<RoomPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/roomposts/');
        setRoomPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='Listings'>
      <h1>Room Filters Using Axios</h1>
      {Array.isArray(roomPosts) ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // This creates a responsive grid layout
          gap: '20px', // This is the space between grid items
          padding: '20px' // Optional: adds some padding around the grid
        }}>
          {roomPosts.map((room) => (
            <div key={room.postId} style={{ marginBottom: '20px' }}>
              <RoomieCard roommate={room}/>
              {/* ...rest of the code for displaying room details... */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListOfPosts;

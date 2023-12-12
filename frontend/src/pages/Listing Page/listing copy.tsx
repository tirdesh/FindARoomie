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
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

    function handlePostDisplay(postId: string): React.MouseEventHandler<HTMLButtonElement> | undefined {
        throw new Error('Function not implemented.');
    }

  return (
    <div className='Listings'>
      <h1>Room Filters Using Axios</h1>
      {Array.isArray(roomPosts) ? (
        <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
        {roomPosts.map((room) => (
        <div key={room.postId} style={{ marginBottom: '20px' }}>
          <RoomieCard roommate={room}/>
            <Button variant="contained" color="secondary" size="medium"  sx={{ marginLeft: '1em' }}>
                    {room.Posttype}
            </Button>
            <h2>{room.Posttype}</h2>
            <p>Name: {room.lookingForRoom.name}</p>
            <p>Location: {room.lookingForRoom.locationAddress}</p>
            <p>Description: {room.lookingForRoom.description}</p>
            {/* Add other properties as needed */}
            <p>Monthly Rent: {room.pricingAndLeaseDetails.monthlyRent}</p>
            <p>Utilities Included: {room.pricingAndLeaseDetails.utilitiesIncluded ? 'Yes' : 'No'}</p>
            {/* Add other properties as needed */}
            <p>House Types: {room.roomAndPropertyDetails.houseType.join(', ')}</p>
            <p>Number of Beds: {room.roomAndPropertyDetails.numBeds}</p>
            {/* Add other properties as needed */}
            <p>Preferences: {room.preferences.preferences.join(', ')}</p>
            <p>Contact Email: {room.contactInfo.email}</p>
            <p>Contact Phone: {room.contactInfo.phone}</p>
            {/* Add other properties as needed */}
            <p >Room Photos: <br />
            {room.photos.map((imageId) => (
                <div style={{ height: 400, width: 400, margin: 'auto' }}>
                <ImageViewer imageId={imageId} />
                </div>
            ))}
            </p>
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

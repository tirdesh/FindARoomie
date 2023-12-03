import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface RoomFilter {
  _id: string;
  name: string;
  dateOfCreation: string;
  filterParams: {
    location: string;
    price_range: string;
    amenities: string[];
    lease_duration: string;
    room_size: string;
    pet_policy: string;
    available_from: string;
    _id: string;
  }[];
  __v: number;
}

const RoomFiltersAxios: React.FC = () => {
  const [roomFilters, setRoomFilters] = useState<RoomFilter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/roomlistings/filters');
        setRoomFilters(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h1>Room Filters Using Axios</h1>
      {Array.isArray(roomFilters) ? (
        roomFilters.map((filter) => (
          <div key={filter._id} style={{ marginBottom: '20px' }}>
            <h2>{filter.name}</h2>
            <p>Location: {filter.filterParams[0].location}</p>
            <p>Price Range: {filter.filterParams[0].price_range}</p>
            <p>Amenities: {filter.filterParams[0].amenities.join(', ')}</p>
            <p>Lease Duration: {filter.filterParams[0].lease_duration}</p>
            <p>Room Size: {filter.filterParams[0].room_size}</p>
            <p>Pet Policy: {filter.filterParams[0].pet_policy}</p>
            <p>Available From: {filter.filterParams[0].available_from}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RoomFiltersAxios;
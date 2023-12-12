import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomPost from '../../models/roomPost';
import ImageViewer from '../testPages/imageViewer';
import { Button } from '@mui/material';
import FiltersBar from '../testPages/FiltersBar';
import RoomieCard from '../../components/RoomiePosting/RoomieCard';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { loadPostList } from '../../redux/slices/PostList';
import './listing.css'
import { error } from 'console';
 
const ListOfPosts: React.FC = () => {
  const [roomPosts, setRoomPosts] = useState<RoomPost[]>([]); 
  const getData = useSelector((state:RootState)=>state.postlist);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [filter, setFilter] = useState({});
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/roomposts/');
        setRoomPosts(response.data.data);
        dispatch(loadPostList(response.data.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handlePostOpen = (post: RoomPost) =>{
    navigate(`/listings/${post.postId}`, { state: { roomPost: post }});
    console.log(post.postId);
  } 

  const handlePostFilters=(filters:any) =>{
    const apiUrl = "http://localhost:3002/roomposts/";
    axios
      .get(apiUrl, filters)
      .then((response)=>{
        console.log(response.data)
      })
      .catch((error)=>{
        console.log(error.response);
      })

  }
 
  return (
    <div className='Listings'>
      <FiltersBar applyFilters={(filters) => {handlePostFilters(filters)}} />
      <h1>Room Filters Using Axios</h1>
      {Array.isArray(getData) ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // This creates a responsive grid layout
          gap: '20px', // This is the space between grid items
          padding: '20px' // Optional: adds some padding around the grid
        }}>
          {getData.map((room) => (
            <div key={room.postId} style={{ marginBottom: '20px' }}>
              <a className='onHover' onClick={()=>handlePostOpen(room)}><RoomieCard roommate={room}/></a>
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
 
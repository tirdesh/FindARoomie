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
  const [filteredRoomPosts, setFilteredRoomPosts] = useState<RoomPost[]>([]); // Added filteredRoomPosts state
  const [finalPosts, setFinalPosts] = useState<RoomPost[]>(getData); // Use finalPosts state

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/roomposts/');
        setRoomPosts(response.data.data);
        dispatch(loadPostList(response.data.data));
        setFinalPosts(response.data.data);
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

  const handlePostFilters = (filters: any) => {
    //console.log('Applying filters:', filters);
    //console.log('roomPosts:', roomPosts);
    // Apply filters to the original list and update the filteredRoomPosts state
    const filteredPosts = roomPosts.filter((post) => {
      // Handle post type filter
      if (filters.postType && filters.postType.length > 0 && !filters.postType.includes(post.Posttype)) {
        return false;
      }
      
      // Handle price range filter
      if (filters.priceRange) {
        const lowerLimit = parseInt(filters.priceRange[0]);
        const upperLimit = parseInt(filters.priceRange[1]);
        const monthlyRent = parseInt(post.pricingAndLeaseDetails.monthlyRent);
  
        if (monthlyRent < lowerLimit || monthlyRent > upperLimit) {
          return false;
        }
      }
  
      // Handle move-in date filter
      if (filters.moveInDate) {
        const startDate = new Date(filters.moveInDate);
        const leaseStartDate = new Date(post.pricingAndLeaseDetails.leaseDuration.split(' to ')[0]);
        //console.log('moveInDate:', startDate);
        //console.log('post.pricingAndLeaseDetails.leaseDuration:', leaseStartDate);
        // Check if move-in date is within the last 10 days before the lease start date
        const tenDaysBeforeLeaseStart = new Date(leaseStartDate);
        tenDaysBeforeLeaseStart.setDate(tenDaysBeforeLeaseStart.getDate() - 10);
  
        if (startDate <= tenDaysBeforeLeaseStart) {
          return false;
        }
      }
      
      // Handle house type filter
      if (filters.houseType && filters.houseType.length > 0) {
        const postHouseTypes = post.roomAndPropertyDetails.houseType.map(type => type);
        if (!postHouseTypes.some(type => filters.houseType.includes(type))) {
          return false;
        }
      }
      // Handle furnished type filter
      if (filters.furnished && filters.furnished.length > 0) {
        const postFurnishings = post.roomAndPropertyDetails.furnished.map(furnishing => furnishing);
        if (!postFurnishings.some(furnishing => filters.furnished.includes(furnishing))) {
          return false;
        }
      }

      // Handle utilities filter
      if (filters.utilities && filters.utilities.length > 0) {
        const postUtilities = post.roomAndPropertyDetails.utilities.map(utility => utility);
        if (!postUtilities.some(utility => filters.utilities.includes(utility))) {
          return false;
        }
      }

      // Handle amenities filter
      if (filters.amenities && filters.amenities.length > 0) {
        const postAmenities = post.roomAndPropertyDetails.amenities.map(amenity => amenity);
        if (!postAmenities.some(amenity => filters.amenities.includes(amenity))) {
          return false;
        }
      }
  
      // Handle preferences filter
      if (filters.preferences && filters.preferences.length > 0) {
        const postPreferences = post.preferences.preferences.map(preference => preference);
        if (!postPreferences.some(preference => filters.preferences.includes(preference))) {
          return false;
        }
      }
  
      // If none of the filters excluded the post, include it in the filtered list
      return true;
    });
  
    setFinalPosts(filteredPosts); // Update finalPosts with the filtered data
    console.log(filteredPosts.length);
  };
 
  return (
    <div className='Listings'>
      <FiltersBar applyFilters={(filters) => {handlePostFilters(filters)}} />
      <h1>Room Filters Using Axios</h1>
      {Array.isArray(finalPosts) ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // This creates a responsive grid layout
          gap: '20px', // This is the space between grid items
          padding: '20px' // Optional: adds some padding around the grid
        }}>
          {finalPosts.map((room) => (
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
 
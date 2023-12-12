import React, { useState } from 'react';
import RoomPost from '../../models/roomPost';
import RoomieCard from '../../components/RoomiePosting/RoomieCard';
import { Typography, Paper, Container, Grid, Pagination, Button } from '@mui/material';

interface ListPostsProps {
  posts: RoomPost[];
  handlePostOpen: (post: RoomPost) => void;
}

const ListPosts: React.FC<ListPostsProps> = ({ posts, handlePostOpen }) => {
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      {Array.isArray(currentPosts) ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          padding: '20px'
        }}>
          {currentPosts.map((room) => (
            <div key={room.postId} style={{ marginBottom: '20px' }}>
              <Container style={{ display: 'flex', flexDirection: 'row', maxWidth: '90vw' }}>
                <RoomieCard roommate={room} />
                <Paper elevation={3} style={{ maxHeight: '100%', overflow: 'auto' }}>
                  <a className='onHover'>
                    <Grid container
                      direction={'row'}
                      sx={{ backgroundColor: '#EEE7DA', height: '25vh' }} className='parentGrid'  >
              
                        <Typography sx={{ paddingBottom: 1, fontSize: 'large', textAlign: 'justify' }} variant='h3' textAlign={'left'}>
                          Property Description:
                        </Typography>
                        <Typography sx={{ paddingBottom: 1, fontSize: 'large', textAlign: 'justify' }} variant='body1' textAlign={'left'}>
                          {room.lookingForRoom.description}
                        </Typography>
                        <Typography sx={{ paddingBottom: 1 }} variant='h5' textAlign={'left'}>
                          <b>{"Per Month Rent : "}{(room.pricingAndLeaseDetails.monthlyRent)}</b>
                          {(room.pricingAndLeaseDetails.utilitiesIncluded) ? (" - Utilities Included") : (" - Excluding Utilities")}
                        </Typography>
                        <Typography sx={{ paddingBottom: 1 }} variant='h5' textAlign={'left'}>
                          {"Number of beds : "} <i>{(room.roomAndPropertyDetails.numBeds)}</i>
                        </Typography>
                        <Typography sx={{ paddingBottom: 1 }} variant='h5' textAlign={'left'}>
                          {"Number of baths : "} <i>{(room.roomAndPropertyDetails.numBaths)}</i>
                        </Typography>
                        <Typography sx={{ paddingBottom: 1 }} variant='h5' textAlign={'left'}>
                          {"Furnished: "} <i>{(room.roomAndPropertyDetails.furnished[0])}</i>
                        </Typography>                      
                    </Grid>
                    <Button sx={{ margin: 1 }} variant="contained" onClick={() => handlePostOpen(room)}>View Details</Button>
                  </a>
                </Paper>
              </Container>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            page={currentPage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            size="large"
          />
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ListPosts;

import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoommatePost from '../../models/roomPost';
import ImageViewer from '../../pages/testPages/imageViewer';
import { useNavigate } from 'react-router-dom';
import { CSSProperties, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

import './ImageCard.css';
import { addWishListId } from '../../redux/slices/user-slice';

type Props = {
    roommate: RoommatePost;
    style?: CSSProperties; // Add style prop
};

const RoomieCard: React.FC<Props> = ({ roommate, style }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch> ();
    const sessionUser = useSelector((state:RootState)=>state.user);

    const getCardBackgroundColor = (postType: string) => {
        switch (postType) {
            case 'Roomie':
                return 'rgba(151, 40, 178, 0.7)';
            case 'Room':
                return 'rgba(50, 119, 213, 0.7)';
        }
    };

    const cardStyle = {
        maxHeight: 400,
        maxWidth: 350,
        mb: 2,
        backgroundColor: getCardBackgroundColor(roommate.Posttype),
    };

    const handlePostOpen = (post: RoommatePost) => {
        navigate(`/listings/${post.postId}`, { state: { roomPost: post }});
        console.log(post.postId);
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleWishlishClick = () => {
        setIsClicked(!isClicked);

        if (isClicked) {
            dispatch(addWishListId(roommate.postId));
        }
    };

    return (
        <Grid item xs={12} sm={6} md={4} style={{}}>
            <Card sx={cardStyle}>
                <a className='onHover' onClick={(e)=>handlePostOpen(roommate)}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="roomie">
                                {roommate.lookingForRoom.name.charAt(0)}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={roommate.lookingForRoom.name}
                    />
                    <div className="image-container" style={{ height: '200px', width: '100%' }}>
                        <ImageViewer 
                            imageId={roommate.photos[0]} style={{ height: '100% ', width: '100% ' }}
                        />
                    </div>
                
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {roommate.lookingForRoom.locationAddress}
                        </Typography>
                    </CardContent>
                </a>
               
                <CardActions disableSpacing>
                    <IconButton aria-label="add to wishlist"
                        onClick={handleWishlishClick}
                        style={{ color: isClicked ? 'red' : 'black' }}>
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default RoomieCard;

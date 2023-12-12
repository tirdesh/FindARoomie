import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoommatePost from '../../models/roomPost';

type Props = {
    roommate: RoommatePost;
};

const RoomieCard: React.FC<Props> = (props: Props) => {
    const post: RoommatePost = props.roommate;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, mb: 2 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="roomie">
                            {post.lookingForRoom.name.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={post.lookingForRoom.name}
                                    />
                <CardMedia
                    component="img"
                    height="194"
                    image={post.photos[0]} // Make sure this points to the correct image path
                    alt="Room image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.lookingForRoom.locationAddress}
                    </Typography>
                    {/* Add other short details if necessary */}
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to wishlist">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default RoomieCard;

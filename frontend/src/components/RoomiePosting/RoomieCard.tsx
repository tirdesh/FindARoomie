import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoommatePost from '../../models/roomPost';
import ImageViewer from '../../pages/testPages/imageViewer';

type Props = {
    roommate: RoommatePost;
};

// Assuming that Posttype is the correct property name and it's of type string
const RoomieCard: React.FC<Props> = ({ roommate }) => {
    // Update the function to use the correct property name
    const getCardBackgroundColor = (postType: string) => {
        switch (postType) {
            case 'Roomie':
                return 'rgba(151, 40, 178, 0.7)';
            case 'Room':
                return 'rgba(50, 119, 213, 0.7)';

        }
    };

    // Use the correct property name from your RoomPost type
    const cardStyle = {
        maxWidth: 345,
        mb: 2,
        backgroundColor: getCardBackgroundColor(roommate.Posttype), // Use Posttype here
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={cardStyle}>
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
                <div style={{ height: '194px' }}>
                    <ImageViewer
                        imageId={roommate.photos[0]}
                    />
                </div>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {roommate.lookingForRoom.locationAddress}
                    </Typography>
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
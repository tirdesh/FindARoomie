import React, { useState, useEffect, ReactElement } from 'react';
import axios from 'axios';
import RoomPost from '../../models/roomPost';
import ImageViewer from '../testPages/imageViewer';
import { Button, Paper } from '@mui/material';

type Props = {
    Room: RoomPost
}   

const roomDisplay: React.FC<Props> = (props: Props):ReactElement =>{
    const room: RoomPost = props.Room;
    return (
        <Paper>
            
        </Paper>
    );
}

export default roomDisplay;
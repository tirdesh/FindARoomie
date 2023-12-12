import React, { useState } from 'react';
import RoomPost from '../../models/roomPost';
import FilteredMap from '../../components/MapComponents/MapViewer';

interface MapPostsProps {
  posts: RoomPost[];
  handlePostOpen: (post: RoomPost) => void;
}

const MapPosts: React.FC<MapPostsProps> = ({ posts, handlePostOpen }) => {
  const postids = handlePostOpen;

  return (
    <FilteredMap posts={posts} handlePostOpen={handlePostOpen} />
  );
};

export default MapPosts;

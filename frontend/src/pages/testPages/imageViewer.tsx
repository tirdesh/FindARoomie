import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageViewer: React.FC<{ imageId: string }> = ({ imageId }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/upload/${imageId}`, {
          responseType: 'arraybuffer',
        });
        //console.log(response);
        const base64Image = btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        //console.log('base64Image:', base64Image);

        const url = `data:${response.headers['content-type']};base64,${base64Image}`;
        setImageUrl(url);
        setLoading(false); // Set loading to false once the image is loaded
      } catch (error: any) {
        console.error('Error fetching image:', error.message);
      }
    };

    fetchImage();
  }, [imageId]);

  if (loading) {
    return <p>Loading image...</p>;
  }

  if (!imageUrl) {
    return <p>Error loading image</p>;
  }

  return (
      <img src={imageUrl} alt="Uploaded" style={{ height:'400px', width: '500px', maxHeight: '500px' }} />
  );
};

export default ImageViewer;

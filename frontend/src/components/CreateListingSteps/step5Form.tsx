// components/CreateListingSteps/Step5Form.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateForm } from '../../redux/slices/CreateListingFormSlice';
import {
  Typography,
  Grid,
  TextField,
  InputLabel,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const Step5Form: React.FC = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form.contactAndPresentation);

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleInputChange = (field: keyof typeof formState, value: string | string[]) => {
    dispatch(updateForm({ contactAndPresentation: { ...formState, [field]: value } }));
  };
  
  const onDrop = async (acceptedFiles: File[]) => {
    // Assuming you have a function to upload images and get their document IDs from the server
    const uploadImagesAndGetIds = async (files: File[]): Promise<string[]> => {
      // Implement the logic to upload images and get document IDs from the server
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append('image', file);
  
        try {
          const response = await axios.post('http://localhost:3002/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          return response.data.data._id;
        } catch (error: any) {
          console.error('Error uploading image:', error.message);
          return null;
        }
      });
  
      return Promise.all(uploadPromises);
    };
  
    try {
      const docIds = await uploadImagesAndGetIds(acceptedFiles);
      
      // Update the Redux store with the new image document IDs
      handleInputChange('photos', [...formState.photos, ...docIds]);
      setImageFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    } catch (error: any) {
      console.error('Error uploading images:', error.message);
      alert('Error uploading images. Please try again.');
    }
  };
  
  
  const handleDeleteImage = async (index: number) => {
    try {
      // Get the document ID of the image to be deleted
      const deletedDocId = formState.photos[index];
  
      // Make a request to your server to delete the image by ID
      await axios.delete(`http://localhost:3002/upload/${deletedDocId}`);
  
      // Update the state in React
      const newImages = [...imageFiles];
      newImages.splice(index, 1);
      setImageFiles(newImages);
  
      const newPhotos = [...formState.photos];
      newPhotos.splice(index, 1);
      handleInputChange('photos', newPhotos);
    } catch (error: any) {
      console.error('Error deleting image:', error.message);
      alert('Error deleting image. Please try again.');
    }
  };
  
  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Grid container spacing={2}>
      {/* Availability */}
      <Grid item xs={12}>
        <TextField
          label="Availability"
          type="text"
          value={formState.availability}
          onChange={(e) => handleInputChange('availability', e.target.value)}
          fullWidth
        />
      </Grid>
      {/* Contact Information */}
      <Grid item xs={12}>
        <TextField
          label="Contact Information"
          type="text"
          value={formState.contactInformation}
          onChange={(e) => handleInputChange('contactInformation', e.target.value)}
          fullWidth
        />
      </Grid>
      {/* Photos */}
      <Grid item xs={12}>
        <InputLabel>Photos</InputLabel>
        <div {...getRootProps()} style={{ marginTop: '8px', border: '2px dashed #d9d9d9', borderRadius: '4px', padding: '20px', cursor: 'pointer' }}>
          <input {...getInputProps()} />
          <Typography variant="body2">Drag and drop or click to select files</Typography>
        </div>
        <Box mt={2} display="flex" flexWrap="wrap">
          {imageFiles.map((file, index) => (
            <Paper key={index} sx={{ position: 'relative', p: 1, m: 1 }}>
              <img
                src={URL.createObjectURL(file)}
                alt={`uploaded-${index}`}
                style={{ width: 50, height: 50, objectFit: 'cover' }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  color: 'error.main', // Use the color that contrasts well with your background
                }}
                onClick={() => handleDeleteImage(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Paper>
          ))}
        </Box>
      </Grid>
      {/* Nearby Attractions */}
      <Grid item xs={12}>
        <TextField
          label="Nearby Attractions"
          type="text"
          multiline
          rows={2}
          value={formState.nearbyAttractions}
          onChange={(e) => handleInputChange('nearbyAttractions', e.target.value)}
          fullWidth
        />
      </Grid>
      {/* Communication Preferences */}
      <Grid item xs={12}>
        <TextField
          label="Communication Preferences"
          type="text"
          value={formState.communicationPreferences}
          onChange={(e) => handleInputChange('communicationPreferences', e.target.value)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Step5Form;

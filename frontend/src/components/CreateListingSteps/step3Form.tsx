// components/CreateListingSteps/Step3Form.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateForm } from '../../redux/slices/CreateListingFormSlice';
import { addUniqueFeature } from '../../redux/slices/ListingOptionsSlice';
import { Typography, ButtonGroup, Button, Grid, Box, Autocomplete, TextField } from '@mui/material';


const Step3Form: React.FC = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form.roomAndPropertyDetails);
  const uniqueFeaturesOptions = useSelector((state: RootState) => state.listOptions.uniqueFeatures);
  const sharedAmenitiesOptions = useSelector((state: RootState) => state.listOptions.amenities);

  const handleInputChange = (field: keyof typeof formState, value: string | boolean) => {
    dispatch(updateForm({ roomAndPropertyDetails: { ...formState, [field]: value } }));
  };

  const handleUniqueFeaturesChange = (_event: React.ChangeEvent<{}>, values: string[]) => {
    // Join the selected values into a single string separated by '::'
    const joinedValues = values.join('::');
    handleInputChange('uniqueFeatures', joinedValues);
  };
  
  const handleAmenitiesChange = (_event: React.ChangeEvent<{}>, values: string[]) => {
    // Join the selected values into a single string separated by '::'
    const joinedValues = values.join('::');
    handleInputChange('sharedAmenities', joinedValues);
  };

  return (
    <Grid container spacing={2}>
      {/* Room Size */}
      <Grid item xs={12}>
        <TextField
          label="Room Size"
          type="text"
          value={formState.roomSize}
          onChange={(e) => handleInputChange('roomSize', e.target.value)}
          fullWidth
        />
      </Grid>
      {/* Furnished */}
      <Grid item xs={12}>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ marginRight: '8px' }}>
            Furnished:
          </Typography>
          <ButtonGroup variant="contained" color="primary">
            <Button
              onClick={() => handleInputChange('furnished', true)}
              variant={formState.furnished ? 'contained' : 'outlined'}
            >
              Yes
            </Button>
            <Button
              onClick={() => handleInputChange('furnished', false)}
              variant={!formState.furnished ? 'contained' : 'outlined'}
            >
              No
            </Button>
          </ButtonGroup>
        </Box>
      </Grid>
      {/* Unique Features */}
      <Grid item xs={12}>
        <Autocomplete
          multiple
          id="unique-features"
          options={uniqueFeaturesOptions}
          value={formState.uniqueFeatures ? formState.uniqueFeatures.split('::') : []}
          onChange={handleUniqueFeaturesChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Unique Features"
            />
          )}
        />
      </Grid>
      {/* Common Areas */}
      <Grid item xs={12}>
        <TextField
          label="Common Areas"
          type="text"
          value={formState.commonAreas}
          onChange={(e) => handleInputChange('commonAreas', e.target.value)}
          fullWidth
        />
      </Grid>
      {/* Shared Amenities */}
      <Grid item xs={12}>
        <Autocomplete
          multiple
          id="shared-amenities"
          options={sharedAmenitiesOptions}  // Replace with your shared amenities options
          value={formState.sharedAmenities ? formState.sharedAmenities.split('::') : []}
          onChange={handleAmenitiesChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Shared Amenities"
            />
          )}
        />
      </Grid>
      {/* Property Size */}
      <Grid item xs={12}>
        <TextField
          label="Property Size"
          type="text"
          value={formState.propertySize}
          onChange={(e) => handleInputChange('propertySize', e.target.value)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Step3Form;

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

  const handleInputChange = (field: keyof typeof formState, value: string) => {
    dispatch(updateForm({ roomAndPropertyDetails: { ...formState, [field]: value } }));
  };

  const handleFurnishedButtonClick = (furnishedType: string) => {
    handleInputChange('furnished', furnishedType);
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
              onClick={() => handleFurnishedButtonClick('fully')}
              variant={formState.furnished === 'fully' ? 'contained' : 'outlined'}
            >
              Fully
            </Button>
            <Button
              onClick={() => handleFurnishedButtonClick('semi')}
              variant={formState.furnished === 'semi' ? 'contained' : 'outlined'}
            >
              Semi
            </Button>
            <Button
              onClick={() => handleFurnishedButtonClick('unfurnished')}
              variant={formState.furnished === 'unfurnished' ? 'contained' : 'outlined'}
            >
              Unfurnished
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
              label="Amenities"
            />
          )}
        />
      </Grid>
      {/* Property Description */}
      <Grid item xs={12}>
        <TextField
          label="Property Description"
          type="text"
          multiline
          rows={2}
          value={formState.propertyDescription}
          onChange={(e) => handleInputChange('propertyDescription', e.target.value)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Step3Form;

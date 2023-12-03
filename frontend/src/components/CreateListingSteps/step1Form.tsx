// components/CreateListingSteps/Step1Form.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateForm } from '../../redux/slices/CreateListingFormSlice';
import { Button, ButtonGroup, TextField, Grid, Typography, Box } from '@mui/material';

const Step1Form: React.FC = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form.listingTypeAndLocationInformation);

  const handleInputChange = (field: keyof typeof formState, value: string) => {
    dispatch(updateForm({ listingTypeAndLocationInformation: { ...formState, [field]: value } }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6">Looking for a:</Typography>
          <ButtonGroup variant="contained" color="primary" sx={{ marginLeft: '8px' }}>
            <Button
              onClick={() => handleInputChange('listingType', 'Room')}
              variant={formState.listingType === 'Room' ? 'contained' : 'outlined'}
            >
              Room
            </Button>
            <Button
              onClick={() => handleInputChange('listingType', 'Roomie')}
              variant={formState.listingType === 'Roomie' ? 'contained' : 'outlined'}
            >
              Roomie
            </Button>
          </ButtonGroup>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address"
          type="text"
          value={formState.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Proximity"
          type="text"
          value={formState.proximity}
          onChange={(e) => handleInputChange('proximity', e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Safety Features"
          type="text"
          value={formState.safetyFeatures}
          onChange={(e) => handleInputChange('safetyFeatures', e.target.value)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Step1Form;

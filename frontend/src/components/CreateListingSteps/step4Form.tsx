// components/CreateListingSteps/Step4Form.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateForm } from '../../redux/slices/CreateListingFormSlice';
import { Typography, ButtonGroup, Button, Grid, Box, TextField } from '@mui/material';

const Step4Form: React.FC = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form.houseRulesAndTenantRequirements);

  const handleInputChange = (field: keyof typeof formState, value: string | boolean) => {
    dispatch(updateForm({ houseRulesAndTenantRequirements: { ...formState, [field]: value } }));
  };

  return (
    <Grid container spacing={2}>
      {/* House Rules */}
      <Grid item xs={12}>
        <TextField
          label="House Rules"
          type="text"
          multiline
          rows={2}
          value={formState.houseRules}
          onChange={(e) => handleInputChange('houseRules', e.target.value)}
          fullWidth
        />
      </Grid>
      {/* Smoking Allowed and Pet Friendly */}
      <Grid item xs={12}>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ marginRight: '8px' }}>
            Smoking Allowed:
          </Typography>
          <ButtonGroup variant="contained" color="primary">
            <Button
              onClick={() => handleInputChange('smokingAllowed', true)}
              variant={formState.smokingAllowed ? 'contained' : 'outlined'}
            >
              Yes
            </Button>
            <Button
              onClick={() => handleInputChange('smokingAllowed', false)}
              variant={!formState.smokingAllowed ? 'contained' : 'outlined'}
            >
              No
            </Button>
          </ButtonGroup>
          
          <Typography variant="subtitle1" sx={{ marginLeft: '16px', marginRight: '8px' }}>
            Pet Friendly:
          </Typography>
          <ButtonGroup variant="contained" color="primary">
            <Button
              onClick={() => handleInputChange('petFriendly', true)}
              variant={formState.petFriendly ? 'contained' : 'outlined'}
            >
              Yes
            </Button>
            <Button
              onClick={() => handleInputChange('petFriendly', false)}
              variant={!formState.petFriendly ? 'contained' : 'outlined'}
            >
              No
            </Button>
          </ButtonGroup>
        </Box>
      </Grid>
      {/* Guest Policy */}
      <Grid item xs={12}>
        <TextField
          label="Guest Policy"
          type="text"
          value={formState.guestPolicy}
          onChange={(e) => handleInputChange('guestPolicy', e.target.value)}
          fullWidth
        />
      </Grid>
      {/* Tenant Requirements */}
      <Grid item xs={12}>
        <TextField
          label="Tenant Requirements"
          type="text"
          multiline
          rows={2}
          value={formState.tenantRequirements}
          onChange={(e) => handleInputChange('tenantRequirements', e.target.value)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Step4Form;

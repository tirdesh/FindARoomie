// components/CreateListingSteps/SummaryPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Grid, Paper, Button, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { submitForm } from '../../redux/slices/CreateListingFormSlice';
import { useNavigate } from 'react-router-dom';
import './summary.css';

const SummaryPage: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/test');  
  };

  const handleSubmit = async () => {
    // Dispatch the submitForm action
    // await dispatch(submitForm(formData));
    // You can navigate to a success page or perform other actions after submission
  };

  const renderAccordion = (title: string, content: React.ReactNode) => (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${title.toLowerCase()}-content`} id={`${title.toLowerCase()}-header`}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {content}
      </AccordionDetails>
    </Accordion>
  );

  return (
    <Grid className='summaryGrid' container spacing={2}>
      <Grid item xs={12}>
        <Paper className='formPaper' elevation={3} style={{ padding: '16px' }}>
          <Typography textAlign={'center'} variant="h4">Summary</Typography>

          {renderAccordion("Location Information", (
            <Typography>
              Address: {formData.listingTypeAndLocationInformation.address}<br />
              Proximity: {formData.listingTypeAndLocationInformation.proximity}<br />
              Safety Features: {formData.listingTypeAndLocationInformation.safetyFeatures}
            </Typography>
          ))}

          {renderAccordion("Pricing and Lease Details", (
            <Typography>
              Rent: ${formData.pricingAndLeaseDetails.rent}<br />
              Utilities Included: {formData.pricingAndLeaseDetails.utilitiesIncluded ? 'Yes' : 'No'}<br />
              Lease Length: {formData.pricingAndLeaseDetails.leaseLength}<br />
              Upfront Fees: {formData.pricingAndLeaseDetails.upfrontFees}
            </Typography>
          ))}

          {renderAccordion("Room and Property Details", (
            <Typography>
              Room Size: {formData.roomAndPropertyDetails.roomSize}<br />
              Furnished: {formData.roomAndPropertyDetails.furnished}<br />
              Unique Features: {formData.roomAndPropertyDetails.uniqueFeatures}<br />
              Property Description: {formData.roomAndPropertyDetails.propertyDescription}<br />
              Shared Amenities: {formData.roomAndPropertyDetails.sharedAmenities}
            </Typography>
          ))}

          {renderAccordion("House Rules and Tenant Requirements", (
            <Typography>
              House Rules: {formData.houseRulesAndTenantRequirements.houseRules}<br />
              Smoking Allowed: {formData.houseRulesAndTenantRequirements.smokingAllowed ? 'Yes' : 'No'}<br />
              Pet Friendly: {formData.houseRulesAndTenantRequirements.petFriendly ? 'Yes' : 'No'}<br />
              Guest Policy: {formData.houseRulesAndTenantRequirements.guestPolicy}<br />
              Tenant Requirements: {formData.houseRulesAndTenantRequirements.tenantRequirements}
            </Typography>
          ))}

          {renderAccordion("Contact and Presentation", (
            <Typography>
              Availability: {formData.contactAndPresentation.availability}<br />
              Contact Information: {formData.contactAndPresentation.contactInformation}<br />
              Nearby Attractions: {formData.contactAndPresentation.nearbyAttractions}<br />
              Communication Preferences: {formData.contactAndPresentation.communicationPreferences}
            </Typography>
          ))}

          <Divider style={{ margin: '16px 0' }} />

          <Grid container justifyContent="space-between">
            <Grid item>
              <Button variant="contained" onClick={handleBack}>Back</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>

        </Paper>
      </Grid>
    </Grid>
  );
};

export default SummaryPage;

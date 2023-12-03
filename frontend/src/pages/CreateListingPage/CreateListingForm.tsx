// pages/CreateListingPage/CreateListingForm.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementStep, decrementStep } from '../../redux/slices/CreateListingStepSlice';
import { RootState } from '../../redux/store';
import { Button, Stepper, Step, StepLabel, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import your step components
import Step1 from '../../components/CreateListingSteps/step1Form';
import Step2 from '../../components/CreateListingSteps/step2Form';
import Step3 from '../../components/CreateListingSteps/step3Form';
import Step4 from '../../components/CreateListingSteps/step4Form';
import Step5 from '../../components/CreateListingSteps/step5Form';

const steps = ["Location Information", "Pricing and Lease Details", "Room and Property Details", "House Rules and Tenant Requirements", "Contact Info"]; // Update the step labels

const StepForm: React.FC = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.step.currentStep);
  const formData = useSelector((state: RootState) => state.form); // Assuming `form` is the slice holding your form data
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleNext = () => {
    if (step < steps.length) {
        dispatch(incrementStep());
      } else {
        // If it's the last step, navigate to the summary page
        navigate('/summary');
      }
    console.log(formData)
  };

  const handlePrev = () => {
    dispatch(decrementStep());
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Stepper activeStep={step - 1} orientation="vertical" sx={{ minWidth: '200px' }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item xs={9} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <div style={{ flexGrow: 1 }}>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Button
            disabled={step === 1}
            onClick={handlePrev}
            style={{ alignSelf: 'flex-start' }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{ alignSelf: 'flex-end' }}
          >
            Next
            {/* step < steps.length ? 'Next' : 'Submit' */}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default StepForm;

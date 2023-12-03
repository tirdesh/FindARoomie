// redux/slices/CreateListingFormSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface ListingTypeAndLocationInformation {
  listingType: string;
  address: string;
  proximity: string;
  safetyFeatures: string;
}

interface PricingAndLeaseDetails {
  rent: number;
  utilitiesIncluded: boolean;
  leaseLength: string;
  upfrontFees: string;
}

interface RoomAndPropertyDetails {
  roomSize: string;
  furnished: string;
  uniqueFeatures: string;
  propertyDescription: string;
  sharedAmenities: string;
}

interface HouseRulesAndTenantRequirements {
  houseRules: string;
  smokingAllowed: boolean;
  petFriendly: boolean;
  guestPolicy: string;
  tenantRequirements: string;
}

interface ContactAndPresentation {
  availability: string;
  contactInformation: string;
  photos: string[];
  description: string;
  nearbyAttractions: string;
  communicationPreferences: string;
}

interface FormState {
  listingTypeAndLocationInformation: ListingTypeAndLocationInformation;
  pricingAndLeaseDetails: PricingAndLeaseDetails;
  roomAndPropertyDetails: RoomAndPropertyDetails;
  houseRulesAndTenantRequirements: HouseRulesAndTenantRequirements;
  contactAndPresentation: ContactAndPresentation;
}

const initialState: FormState = {
  listingTypeAndLocationInformation: { listingType: '', address: '', proximity: '', safetyFeatures: '' },
  pricingAndLeaseDetails: { rent: 0, utilitiesIncluded: false, leaseLength: '', upfrontFees: '' },
  roomAndPropertyDetails: { roomSize: '', furnished: '', uniqueFeatures: '', propertyDescription: '', sharedAmenities: '' },
  houseRulesAndTenantRequirements: { houseRules: '', smokingAllowed: false, petFriendly: false, guestPolicy: '', tenantRequirements: '' },
  contactAndPresentation: { availability: '', contactInformation: '', photos: [], description: '', nearbyAttractions: '', communicationPreferences: '' },
};

// Assuming this is your API endpoint
const API_URL = 'your_api_url';

// Use createAsyncThunk for asynchronous actions
export const submitForm = createAsyncThunk('form/submitForm', async (formData: FormState) => {
  try {
    // Simulate an API call by logging the form data
    console.log('Simulating form submission with data:', formData);

    // Simulate a delay (you can remove this in a real API call)
    const result = await new Promise<{ message: string }>((resolve) => {
      setTimeout(() => {
        // Simulate a successful response
        resolve({ message: 'Form submitted successfully' });
      }, 1000);
    });

    return result;
  } catch (error) {
    // Throw the error to trigger the rejected state
    throw error;
  }
});


const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        // Handle fulfilled state if needed
        console.log('Fulfilled:', action.payload);
      })
      .addCase(submitForm.rejected, (state, action) => {
        // Handle rejected state if needed
        console.error('Rejected:', action.error);
      });
  },
});


export const { updateForm } = formSlice.actions;
export default formSlice.reducer;

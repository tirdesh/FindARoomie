// redux/slices/ListingOptionsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListingOptionsState {
  uniqueFeatures: string[];
  amenities: string[];
}

const initialState: ListingOptionsState = {
  uniqueFeatures: ['Hardwood Floors', 'Granite Countertops', 'Walk-in Closet'],
  amenities: ['Swimming Pool', 'Gym', 'Pet-Friendly'],
};

const listingOptionsSlice = createSlice({
  name: 'listingOptions',
  initialState,
  reducers: {
    addUniqueFeature: (state, action: PayloadAction<string>) => {
      state.uniqueFeatures.push(action.payload);
    },
    addAmenity: (state, action: PayloadAction<string>) => {
      state.amenities.push(action.payload);
    },
  },
});

export const { addUniqueFeature, addAmenity } = listingOptionsSlice.actions;
export default listingOptionsSlice.reducer;

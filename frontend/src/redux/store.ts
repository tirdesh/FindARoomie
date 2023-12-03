// redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import createListingFormReducer from './slices/CreateListingFormSlice';
import createListingStepReducer from './slices/CreateListingStepSlice';
import ListingOptionsSliceReducer from './slices/ListingOptionsSlice';

const rootReducer = {
  form: createListingFormReducer,
  step: createListingStepReducer,
  listOptions: ListingOptionsSliceReducer,
  // Add more reducers if needed
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
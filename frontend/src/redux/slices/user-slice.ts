import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../models/user';

export type UserState = User;
const initialState: UserState = {
  _id: "",
  userId: "",
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  email: "",
  phone: "",
  password: "",
  postedList: [],
  wishList: [],
  createdDate: new Date()
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    resetUser: () => initialState, // Return a new state object
    // other reducers can be added here
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;

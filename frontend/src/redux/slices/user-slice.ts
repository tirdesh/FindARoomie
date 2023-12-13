
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "../../models/user";

export type UserState = User;
const intitalState: UserState = {
    _id: "",
    userId: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    createdDate: new Date(),
    postedList: [],
    wishList: [],
    photo: ""
};
export const userSlice = createSlice({
    name: 'User',
    initialState: intitalState,
    reducers:{
        setUser:(state, action: PayloadAction<UserState>) =>{
            return action.payload;
        }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
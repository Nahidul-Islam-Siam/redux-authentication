import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    userProfile: null,
    isLoading: false,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setUserProfile: (state, action) => {
            state.userProfile = action.payload;
        },
        clearUser: (state) => {
            state.currentUser = null;
            state.userProfile = null;
        }
    }
});

export const { setCurrentUser, setUserProfile, clearUser } = userSlice.actions;
export default userSlice.reducer; 
import { createSlice } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user') || 'null');

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user,
        token: user ? user.token : null,
    } as AuthState,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
            state.token = user?.token;
        },
        logout: (state) => {
            localStorage.clear();
            state.user = null;
        },
    },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
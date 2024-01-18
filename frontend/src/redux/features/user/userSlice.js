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
        updateUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        deleteUser: (state) => {
            state.user = null;
            localStorage.clear();
        },
    },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
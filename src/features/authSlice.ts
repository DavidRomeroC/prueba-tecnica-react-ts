import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IsLogged } from "./interfaceFeatures";

const initialState: IsLogged = {
    isLogin: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.isLogin = true;
            localStorage.setItem('userActive', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isLogin = false;
            localStorage.clear();
        }
        
    }
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
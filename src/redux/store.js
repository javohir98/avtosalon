import { configureStore } from '@reduxjs/toolkit'
import adminSlice from "./admin/adminSlice";
import userSlice from './user/userSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        admin: adminSlice,
    }
})
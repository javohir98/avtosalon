import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    mode: 'light',
    cars: []
}

export const getCars = createAsyncThunk('admin/getCars', async ({limit=5, page=1}) => {
    const response = await axios.get(`https://cartestwebapp.herokuapp.com/car?limit=${limit}&page=${page}`)
    return response.data.data
})

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        changeMode(state, action) {
            state.mode = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCars.fulfilled, (state, action) => {
                state.cars = action.payload
            })
    }
})

// export const getMode = (state) => state.mode

export const { changeMode } = adminSlice.actions

export default adminSlice.reducer
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    category: []
}

const BASE_URL = 'https://cartestwebapp.herokuapp.com/'

export const getCategory = createAsyncThunk('user/getCategory', async () => {
    const response = await axios.get(`${BASE_URL}category/marka?limit=4&page=1`)
    return response.data.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getCategory.fulfilled, (state, actions) => {
                state.category = actions.payload.data
            })
    }
})

export const {  } = userSlice.actions

export default userSlice.reducer
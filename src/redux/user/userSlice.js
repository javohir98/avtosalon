import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    category: [],
    selectCategory: '',
    selectedCategoryCars: [],
    selectCar: '',
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

const BASE_URL = 'https://cartestwebapp.herokuapp.com/'


export const getCategory = createAsyncThunk('user/getCategory', async () => {
    const response = await axios.get(`${BASE_URL}category/marka?limit=&page=1`)
    return response.data.data
})

export const getCategoryCars = createAsyncThunk('user/getCategoryCars', async (id) => {
    const response = await axios.get(`${BASE_URL}car?limit=5&page=1&categoryId=${id}`)
    return response.data.data.data
})

export const getCarDetails = createAsyncThunk('user/getCarDetails', async (id) => {
    const response = await axios.get(`${BASE_URL}car/${id}`)
    return response.data.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectCategory = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCategory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getCategory.fulfilled, (state, actions) => {
                state.status = 'succeeded'
                state.category = actions.payload.data
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getCategoryCars.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getCategoryCars.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.selectedCategoryCars = action.payload
            })
            .addCase(getCategoryCars.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getCarDetails.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getCarDetails.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.selectCar = action.payload
            })
            .addCase(getCarDetails.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { selectCategory } = userSlice.actions

export default userSlice.reducer
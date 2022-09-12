import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    category: [],
    selectCategory: '',
    selectedCategoryCars: [],
    selectCar: ''
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
            .addCase(getCategory.fulfilled, (state, actions) => {
                state.category = actions.payload.data
            })
            .addCase(getCategoryCars.fulfilled, (state, action) => {
                state.selectedCategoryCars = action.payload
            })
    }
})

export const { selectCategory } = userSlice.actions

export default userSlice.reducer
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    mode: 'light',
    cars: [],
    totalCars: '',
    test: '',
    isEdit: {
        isOpen: false,
        data: ''
    },
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const getCars = createAsyncThunk('admin/getCars', async ({limit=5, page=1}) => {
    const response = await axios.get(`https://cartestwebapp.herokuapp.com/car?limit=${limit}&page=${page}`)
    return response.data.data
})

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload
        },
        deleteItem: (state, action) => {
            state.cars =  state.cars?.filter((item) => item._id !== action.payload)
        },
        changeEdit: (state, action) => {
            state.isEdit = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCars.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cars = action.payload.data
                state.totalCars = action.payload.total
            })
            .addCase(getCars.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// export const getMode = (state) => state.mode

export const { changeMode, deleteItem, changeEdit } = adminSlice.actions

export default adminSlice.reducer
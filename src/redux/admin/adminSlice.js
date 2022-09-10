import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    mode: 'light'
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        changeMode(state, action) {
            state.mode = action.payload
        }
    },
    extraReducers(builder) {

    }
})

// export const getMode = (state) => state.mode

export const { changeMode } = adminSlice.actions

export default adminSlice.reducer
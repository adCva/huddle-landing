import { createSlice } from '@reduxjs/toolkit'


export const modeSlice = createSlice({
    name: "mode",
    initialState: {
        value: "light"
    },

    reducers: {
        changeMode: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
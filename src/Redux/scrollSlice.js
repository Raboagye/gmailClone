import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice ({
    name: "scroll",
    initialState: {
        scrollActive: false
    },
    reducers : {
        scrollActivated : (state) => {
            state.scrollActive = true
    },
        scrollDeactivated :(state) => {
            state.scrollActive = false
        }
    } 
})

export const {scrollActivated, scrollDeactivated} = scrollSlice.actions
export default scrollSlice.reducer
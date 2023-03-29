import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice ({
    name: "mail",
    initialState: {
        openCompose: false,
        selectedMail: null
    },
    reducers : {
        selectMail: (state, action) => {
            state.selectedMail = action.payload
        },
        Open : (state) => {
            state.openCompose = true
    },
        Close :(state) => {
            state.openCompose = false
        }
    } 
})

export const {Open, Close, selectMail } = mailSlice.actions
export default mailSlice.reducer
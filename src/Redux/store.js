import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSlice"
import scrollReducer from "./scrollSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        mail: mailReducer,
        scroll: scrollReducer,
        user: userReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import RewardSlice from "./RewardSlice";

const store=configureStore({
    reducer:{
        employeedata:dataSlice,
        reward:RewardSlice
    }
    
})
export default store
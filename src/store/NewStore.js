import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import RewardSlice from "./RewardSlice";
import productSlice from "./productSlice";

const store=configureStore({
    reducer:{
        employeedata:dataSlice,
        reward:RewardSlice,
        product:productSlice
    }   
    
})
export default store
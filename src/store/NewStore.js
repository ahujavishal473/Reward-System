import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import RewardSlice from "./RewardSlice";
import productSlice from "./productSlice";
import LoginSlice from "./LoginSlice";

const store=configureStore({
    reducer:{
        employeedata:dataSlice,
        reward:RewardSlice,
        product:productSlice,
        login:LoginSlice
    }   
    
})
export default store
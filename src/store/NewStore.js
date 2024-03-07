import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const NewStore=configureStore({
    reducer:{
        data:dataSlice
    }
})
export default NewStore
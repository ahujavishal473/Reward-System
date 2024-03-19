import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    data:[],
    productdetail:[],
    status:'idle'
}
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending,(state,actions)=>{
            state.status='loading'
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status='idle'
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.status='error'
        })
        .addCase(fetchProductDetail.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchProductDetail.fulfilled,(state,action)=>{
            state.productdetail=action.payload;
            state.status='idle'
        })
        .addCase(fetchProductDetail.rejected,(state,action)=>{
            state.status='error'
        })
    }
})
export default productSlice.reducer
// export const {productsdata}=productSlice.actions
export const fetchProduct=createAsyncThunk('products/fetch',async()=>{
    const response=await fetch('http://localhost:3000/products')
    const data=await response.json()
    return data
})

export const fetchProductDetail=createAsyncThunk('productdetail/fetch',async(id)=>{
    const response=await fetch(`http://localhost:3000/products/${id}`)
    const data=await response.json()
    return data
})
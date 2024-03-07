import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    data:[]
}
const dataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        employeedata(state,action){
            state.data=action.payload
        },
        hrdata(state,actiion){
            state.data=actiion.payload
        },
        admindata(state,action){
            state.data=action.payload
        }
    }
})
export const {employeedata,hrdata,admindata}=dataSlice.actions
export default dataSlice.reducer

export function fetchEmployeedata(){
    return async function(dispatch,getstate){
        axios.get("https://65d70b7e27d9a3bc1d79fdfd.mockapi.io/e-commerce")
        .then((response)=>dispatch(employeedata(response.data)))
    }
}
export function fetchhrdata(){
    return async function(dispatch,getstate){
        axios.get("http://localhost:3000/user")
        .then((response)=>dispatch(hrdata(response.data)))
    }
}
export function fetchadmindata(){
    return async function(dispatch,getstate){
        axios.get("http://localhost:3000/user")
        .then((response)=>dispatch(admindata(response.data)))
    }
}
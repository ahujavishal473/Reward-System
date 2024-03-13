import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    employeedata:[]
}
const dataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        employedata(state,action){
            state.employeedata=action.payload
        }
    }
})
export default dataSlice.reducer
export const { employedata }=dataSlice.actions
export function fetchEmployeeData(){
    return async function(dispatch,getstate){
        axios.get('http://localhost:3000/user')
        .then((response)=>dispatch(employedata(response.data)))
    }
}
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    user:JSON.parse(localStorage.getItem("loginUser")) || null
}
const LoginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        setuserdata(state,action){    
            state.user=action.payload
            localStorage.setItem("loginUser",JSON.stringify(action.payload))
        }
    }
})
export default LoginSlice.reducer
export const {setuserdata}=LoginSlice.actions
// export function fetchUpdatedData(id){
//     return async function(getstate,dispatch){
//         console.log("fetchupdated data called")
//         axios.get(`http://localhost:3000/user/${id}`)
//         .then((response)=>dispatch(setuserdata(response.data)))
//         .catch((error)=>console.log(error))
//     }
// }
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const RewardSlice=createSlice({
    name:"reward",
    initialState:[],
    reducers:{
        rewardData(state,action){
           return state=action.payload
        },
    }
})
export default RewardSlice.reducer
export const {rewardData}=RewardSlice.actions

export function fetchRewards(){
    return async function(dispatch,getstate){
        axios.get("http://localhost:3000/Rewards")
        .then((response)=>dispatch(rewardData(response.data)))
        .catch((error)=>console.log(error))
    }
}
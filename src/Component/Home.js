import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeedata, fetchadmindata, fetchhrdata } from '../store/dataSlice'

const Home = () => {
    const currentUser=JSON.parse(localStorage.getItem("loginUser"))
    console.log("Login User:",currentUser.role)
    const dispatch=useDispatch()
    // const data=useSelector((state)=>state.data.data)
    // console.log('data',data)
    
    // useEffect(()=>{
    //   if(currentUser.role=='employee'){
    //     dispatch(fetchEmployeedata())
    //   }
    //   else if(currentUser.role==='hr'){
    //     dispatch(fetchhrdata())
    //   }
    //   else{
    //     dispatch(fetchadmindata())
    //   }
    // },[])
  
  return (
    <div>
      <h1>Home Page</h1>
      <h1>Welcome:{currentUser.username}</h1>
      {currentUser.role==='employee'}
    </div>
  )
}

export default Home

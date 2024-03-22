import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const EmployeeOrder = () => {

    const loginUserData=JSON.parse(localStorage.getItem("loginUser"))
    console.log(loginUserData.id)
    const [order,setOrder]=useState([])
    useEffect(()=>{
      axios.get(`http://localhost:3000/orders`)
      .then((response)=>setOrder(response.data))
    },[])
    console.log(order)
    const userOrder=order.filter((product)=>product.userid === loginUserData.id)
    console.log(userOrder)
  return (
    <div>
      
      
    </div>
  )
}

export default EmployeeOrder

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
// text-[#6C757D]
const DashBoard = () => {
  const [employee,setemployee]=useState([])
  const [order,setorder]=useState([])
  const [product,setProduct]=useState([])

  useEffect(()=>{
    try {
      axios.get('http://localhost:3000/user')
      .then((response)=>setemployee(response.data))
  
      axios.get('http://localhost:3000/products')
      .then((response)=>setProduct(response.data))
  
      axios.get('http://localhost:3000/orders')
      .then((response)=>setorder(response.data))
    } catch (error) {
      console.log("Error",error)
    }
  },[])
  return (
    <div>
      <div className=' font-semibold p-4 text-3xl'>DashBoard</div>
      <div className="flex mt-3 p-5">
              {/* card */}
               {/* employee */}
              <div className="flex w-[400px] h-[240px] m-2 p-6 bg-white border rounded-lg shadow hover:bg-gray-200">
              
                <div className="mr-[50px]">
                  <div className="bg-emerald-500 w-[100px] h-[100px] rounded-full flex justify-center items-center">
                    <FaUsers className="text-[50px] text-black" />
                  </div>
                  <p className="text-[30px] text-black w-[200px]">Total Employees</p>
                </div>
                <div className="w-full">
                  <h1 className="text-[70px] text-black  float-end">{employee.length}</h1>
                </div>
              </div>
              {/* product */}
              <div className="flex w-[400px] h-[240px] m-2 p-6 bg-white border rounded-lg shadow hover:bg-gray-100">
                <div className="mr-[50px]">
                  <div className="bg-sky-500 w-[100px] h-[100px] rounded-full flex justify-center items-center">
                    <BsFillBoxSeamFill className="text-[50px] text-black" />
                  </div>
                  <p className="text-[30px] text-black w-[200px]">Total Products</p>
                </div>
                <div className="w-full">
                  <h1 className="text-[70px] float-end pr-10">{product.length}</h1>
                </div>
              </div>
              {/* order */}
              <div className="flex w-[400px] h-[240px] m-2 p-6 bg-white border rounded-lg shadow hover:bg-gray-100">
                <div className="mr-[50px]">
                  <div className=" bg-orange-400 w-[100px] h-[100px] rounded-full flex justify-center items-center">
                    <BsCartCheckFill  className="text-[50px] text-black" />
                  </div>
                  <p className="text-[30px] text-black w-[200px]">Total Orders</p>
                </div>
                <div className="w-full">
                  <h1 className="text-[70px] float-end pr-10">{order.length}</h1>
                </div>
              </div>
            </div>
    </div>
  )
}

export default DashBoard

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import Nav from './Nav'

const EmployeeOrder = () => {

    const loginUserData=JSON.parse(localStorage.getItem("loginUser"))
    const [Order,setOrder]=useState([])
    useEffect(()=>{
      axios.get(`http://localhost:3000/orders`)
      .then((response)=>setOrder(response.data))
    },[])
  
    const order=Order.filter((product)=>product.userid === loginUserData.id)
  return (
    <div>
      <Nav />
      <div className="container mx-auto   p-4 ">
                <div className='flex flex-row justify-between'>
                    <div className='text-2xl font-semibold'>Order Details</div>
             
                </div>

                <div className="mt-6 ">
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-200 font-satoshi">
                            <tr>
                                <th className="py-2 px-4">Order Id</th>
                                <th className="py-2 px-4">Product Name</th>
                                <th className="py-2 px-4">Product Points</th>
                                <th className="py-2 px-4">Date</th>
                            </tr>
                        </thead>
                        <tbody className='font-clash'>
                            {order.map((product)=>(
                                <tr className="border-t border-gray-300 text-center">
                                    <td className='p-4'>{product.id}</td>
                                    <td className='p-4 overflow-hidden'>{product.product_name}</td>
                                    <td className='p-4'>{product.product_points}</td>
                                    <td className='p-4'>{product.orderDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
  )
}

export default EmployeeOrder

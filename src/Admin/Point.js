import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRewards, rewardData } from '../store/RewardSlice'
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import axios from 'axios'
import Reward from './Reward'
import { useNavigate } from 'react-router-dom';
const Point = () => {
   const [data,setData]=useState({
    name:'',
    point:''
   })
   const navigate=useNavigate()
   const handleChange=(e)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
   }
   const handleSubmit=(e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/Rewards',{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
    navigate('/admin/reward')
    setData({
      name:'',
      point:''
    })
   }
   return(
      <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-xl p-5 lg:w-[500px]">
                <div className="text-4xl text-center font-bold">Add Reward Category</div>
                <div className="flex items-start p-5">
                    <form action="" onSubmit={handleSubmit} className="space-y-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Reward category</label>
                        <input type="text" name="name" id="name" value={data.name} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Points</label>
                        <input type="number" name="point" id="point" value={data.point} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />    
                        <input type="submit" value="Add Category" className='bg-blue-500 hover:bg-blue-700 text-white text-center py-2 md:w-[420px]' />
                        
                    </form>
                </div>
            </div>
        </div>
    
   )
}

export default Point

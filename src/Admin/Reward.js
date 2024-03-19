import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteReward, fetchRewards } from '../store/RewardSlice'
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Reward = () => {
    const dispatch=useDispatch()
    var reward=useSelector((state)=>state.reward)
    useEffect(()=>{
        dispatch(fetchRewards())
        console.log("12")
    },[dispatch])
    
    
    const handleDelete=async (id)=>{
      try {
        await  dispatch(DeleteReward(id))
        dispatch(fetchRewards())
        
      } catch (error) {
        console.log(error)
      }
    }
    // const handleDelete=async (id)=>{
    //     try {
    //       await fetch(`http://localhost:3000/Rewards/${id}`,{
    //         method:"DELETE"
    //       })
    //       dispatch(fetchRewards())
    //     } catch (error) {
    //       console.log(error)
    //     }
    // }
  return (
    <div className="container mx-auto   p-4 ">
    <div className='flex flex-row justify-between'>
        <div className='text-2xl font-semibold'>Reward Details</div>
        <div>
          <Link to={'/admin/addrewardcategory'} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Reward Category
          </Link>
        </div>
    </div>

    <div className="mt-6 ">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200 font-satoshi">
          <tr>
            <th className="py-2 px-4">Reward Category</th>
            <th className="py-2 px-4">Points</th>
            <th className="py-2 px-4">Actions</th>
           
          </tr>
        </thead>
        <tbody className='font-clash'>
          {reward.map((rewarddata) => (
           
              <tr key={rewarddata.id} className="border-t border-gray-300 text-center">
                <td className="py-2 px-4">{rewarddata.name}</td>
                <td className="py-2 px-4">{rewarddata.point}</td>
                <td className="py-2 px-4 flex flex-row items-center justify-center">
                  <Link to={`/admin/editreward/${rewarddata.id}`}  className=" text-lg text-green-600 hover:bg-slate-300 p-2">
                  <FiEdit />
                  </Link>
                  <button onClick={()=>handleDelete(rewarddata.id)} className=" text-xl text-red-800  hover:bg-slate-300 p-2">
                  <MdDeleteOutline />

                  </button>
                </td>
              </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Reward


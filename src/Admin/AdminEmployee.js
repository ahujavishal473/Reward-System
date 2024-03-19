import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeData } from '../store/dataSlice';
import { BsSearch } from "react-icons/bs";
const AdminHome = () => {
  const [userData,setuserData]=useState([])
  const [search,setSearch]=useState('')

    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3000/user")
        .then((response)=>setuserData(response.data))
    },[userData])
    const handleDelete=async(user)=>{
        try {
          fetch(`http://localhost:3000/user/${user.id}`,{
                method:"DELETE"
            })
            setuserData(userData.filter((users)=>users.id !== user.id))
        } catch (error) {
          console.log(error)
        }
        
    }
  
    return (
        <div className="container mx-auto p-4 ">
          <div className='flex flex-row justify-between'>
              <div className='text-2xl font-semibold'>Employee Details</div>
              <div>
                <Link to={'/admin/addemployee'} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Employee
                </Link>
              </div>
          </div>
          {/* <div className='flex flex-row items-center mt-3'>
          <BsSearch />
          <input type="text" name="search" id="search" onChange={(e)=>setSearch(e.target.value)} placeholder='search here...' />
          </div> */}
          <div className="mt-6 ">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200 font-satoshi">
                <tr>
                  <th className="py-2 px-4">User Name</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Point</th>
                  <th className="py-2 px-4">Actions</th>
                  {/* <th className="py-2 px-4">Delete</th> */}
                </tr>
              </thead>
              <tbody className='font-clash'>
                {userData.map((user) => (
                  user.role !== 'admin' ? (
                    <tr key={user.id} className="border-t border-gray-300 text-center">
                      <td className="py-2 px-4">{user.username}</td>
                      <td className="py-2 px-4">{user.role}</td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">{user.point}</td>
                      <td className="py-2 px-4 flex flex-row items-center justify-center">
                        <Link to={`/admin/editemployee/${user.id}`} className=" text-lg text-green-600 hover:bg-slate-300 p-2">
                        <FiEdit />
                        </Link>
                        <button onClick={() => handleDelete(user)} className= " text-xl text-red-800  hover:bg-slate-300 p-2">
                        <MdDeleteOutline />

                        </button>
                      </td>
                    </tr>
                  ) : null
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default AdminHome

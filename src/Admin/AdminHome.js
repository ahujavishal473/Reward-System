import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminHome = () => {
    const [userData,setuserData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3000/user")
        .then((response)=>setuserData(response.data))
    },[])
    const handleDelete=async(user)=>{
            fetch(`http://localhost:3000/user/${user.id}`,{
                method:"DELETE"
            })
        
       
    }
  
    return (
        <div className="container mx-auto p-4">
          <Link to={'/admin/addemployee'} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Employee
          </Link>
          <div className="mb-4 overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4">User Name</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Point</th>
                  <th className="py-2 px-4">Edit</th>
                  <th className="py-2 px-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  user.role !== 'admin' ? (
                    <tr key={user.id} className="border-t border-gray-300 text-center">
                      <td className="py-2 px-4">{user.username}</td>
                      <td className="py-2 px-4">{user.role}</td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">{user.point}</td>
                      <td className="py-2 px-4">
                        <Link to={`/admin/editemployee/${user.id}`} className="text-blue-500 hover:underline">
                          Edit
                        </Link>
                      </td>
                      <td className="py-2 px-4">
                        <button onClick={() => handleDelete(user)} className="text-red-500 hover:underline">
                          Delete
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

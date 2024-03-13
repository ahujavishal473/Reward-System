import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchEmployeeData } from '../store/dataSlice'

const Register = () => {
    const navigate=useNavigate()
    const employeeData=useSelector((state)=>state.employeedata.employeedata)
    // console.log(employeeData)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchEmployeeData())
    },[])
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: '',
        password: '',
        point:0
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
            const exitsUser=employeeData.some((user)=>user.username === formData.username)
            if(exitsUser){
              alert("username already use")
            }
            else{
              fetch('http://localhost:3000/user', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(formData)
            }
            )
            navigate('/admin/dashboard')
            }
          
           
       
        setFormData({
            username: '',
            email: '',
            role: '',
            password: ''
        })
        // navigate('/admin')
    }
    
    return (
        <div className="flex justify-center">
          <div className="flex flex-col items-center  rounded-xl p-5 lg:w-[500px]">
            <div className="text-4xl text-center font-bold font-satoshi ">Add an Employee</div>
            <div className="flex items-start p-5">
              <form
                action=""
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  UserName:
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter a username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md"
                  required
                />
      
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter an email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md"
                  required
                />
      
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Role:
                </label>
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="hr">HR</option>
                  <option value="employee">Employee</option>
                </select>
      
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md"
                  required
                />
      
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 py-2 text-white text-center w-[420px] rounded-md">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      );
      

}

export default Register

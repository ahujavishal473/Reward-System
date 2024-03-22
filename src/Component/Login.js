import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, json, useNavigate } from 'react-router-dom'
import { setuserdata } from '../store/LoginSlice'

const Login = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("form Submitted")
        console.log("submitted Data", formData)
        const response = await fetch(`http://localhost:3000/user?username=${formData.username}`)
        
        const data = await response.json()
        console.log("data",data);
        if(data.length>0){
            if(formData.password=== data[0].password){
                dispatch(setuserdata(data[0]))
                // localStorage.setItem("loginUser",JSON.stringify(data))
                if(data[0].role==='admin'){
                    navigate('/admin/dashboard')
                }
                else{
                    navigate('/')
                }
            }
            else{
                alert("Enter a valid details")
            }
        }
        else{
            alert("enter a valid details")
        }
        setFormData({
            username: '',
            password: ''
        })
    }
    return (
       <div className='bg-gradient-to-r from-cyan-500 to-blue-500 max-w-screen h-screen flex justify-center'>
         <div className='flex flex-col justify-center border rounded-xl  p-5 bg-white lg:w-[500px] m-auto'>
            <div className='text-4xl text-center font-bold p-5'>Login</div>
            <div className='flex items-start p-5'>
            <form action="" onSubmit={handleSubmit}>    
                <label htmlFor="">Username</label><br />
                <input type="text" name="username" id="username" placeholder='enter a username' value={formData.username} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' onChange={handleChange} /><br /><br />
                <label htmlFor="">password</label><br />
                <input type="password" name="password" id="password" placeholder='enter a password' className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' value={formData.password} onChange={handleChange} /><br /><br />
                <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-white text-center md:w-[420px]'>Login</button>
            </form>
            </div>
       
        </div>
       </div>
    )
}

export default Login
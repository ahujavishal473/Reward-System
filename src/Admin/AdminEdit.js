import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AdminEdit = () => {
    const navigate=useNavigate()
    const [userdata,setuserData]=useState({
        username:'',
        email:'',
        role:'',
        point:'',
    })
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then((response)=>setuserData(response.data))
    },[])
    

    const handleChange=(e)=>{
        const {name,value}=e.target
        setuserData({
            ...userdata,
            [name]:value
        })
    }

    const handleUpdate=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/user/${id}`,{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(userdata)
        })
        setuserData({
            username:'',
            email:'',
            role:'',
            point:''
        })
        navigate('/admin')
    }
   return(
    <>
        <h1>Edit page</h1>
        <form action="" onSubmit={handleUpdate}>
            <label htmlFor="">username</label><br />
            <input type="text" name="username" id="username" value={userdata.username} onChange={handleChange} /><br /><br />
            <label htmlFor="">Email</label><br />
            <input type="email" name="email" id="email" value={userdata.email} onChange={handleChange} /><br /><br />
            <label htmlFor="">Role</label>
            <select name="role" id="role" value={userdata.role} onChange={handleChange}>
               <option value="">select</option>      
               <option value="hr">HR</option>
               <option value="employee">Employee</option>
            </select><br /><br />
            <label htmlFor="">Point</label><br />
            <input type="number" name="point" id="point" value={userdata.point} onChange={handleChange} /><br /><br />
            <input type="submit" value="update" />
        </form>
    </>
   )
}

export default AdminEdit

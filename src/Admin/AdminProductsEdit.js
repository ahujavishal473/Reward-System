import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AdminProductsEdit = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [product,setProduct]=useState({
        title:'',
        points:'',
        brand:'',
        category:'',
        image:'',
        description:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setProduct({
            ...product,
            [name]:value
        })
    }
    useEffect(()=>{
       axios.get(`http://localhost:3000/products/${id}`)
       .then((response)=>setProduct(response.data)) 
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/products/${id}`,{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(product)
        })
        navigate('/admin/products')
        setProduct({
            title:'',
            points:'',
            brand:'',
            category:'',
            image:'',
            description:''
        })
    }
  return (
    <div>
        <div className='text-center font-bold text-3xl'>Update Details</div>
        <div className='flex flex-row justify-center mt-3'>
            <div className='h-[600px] w-[600px] p-24 mt-10'>
                <img src={product.image} alt="" className='w-[400px] h-[400px] bg-none'  /> 
            </div>
             
        <div className='flex mt-5  p-10  '>
         <form action="" className="space-y-4">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">title</label>
            <input type="text" name="title" id="title" value={product.title} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md" />
            <label htmlFor="" className="block text-sm font-medium text-gray-700">points</label>
            <input type="number" name="points" id="points" value={product.points} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md" />
            <label htmlFor="" className="block text-sm font-medium text-gray-700">brand</label>
            <input type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md"/>
            <label htmlFor="" className="block text-sm font-medium text-gray-700">category</label>
            <input type="text" name="category" id="category" value={product.category} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md" />
            <label htmlFor="" className="block text-sm font-medium text-gray-700">Enter a image url</label>
            <input type="text" name="image" id="image" value={product.image} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md" />
            <label htmlFor="" className="block text-sm font-medium text-gray-700">description</label>
            <input type="text" name="description" id="description" value={product.description} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md"/>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 py-2 text-white text-center md:w-[420px]' onClick={handleSubmit}>Update Details</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default AdminProductsEdit

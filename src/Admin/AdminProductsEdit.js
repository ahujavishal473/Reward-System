import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AdminProductsEdit = () => {
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
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 max-w-screen h-screen flex justify-center'>
    <div className='flex flex-col justify-center border rounded-xl  p-5 bg-white lg:w-[500px] m-auto'>
    <div  className='text-4xl text-center font-bold p-5'>Edit Product</div>
    <div className='flex items-start p-5'>
        <form action="">
            <label htmlFor="">title</label><br />
            <input type="text" name="title" id="title" value={product.title} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' /><br /><br />
            <label htmlFor="">points</label>
            <input type="number" name="points" id="points" value={product.points} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' /><br /><br />
            <label htmlFor="">brand</label><br />
            <input type="text" name="brand" id="brand" value={product.brand} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]'/><br /><br />
            <label htmlFor="">category</label><br />
            <input type="text" name="category" id="category" value={product.category} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' /><br /><br />
            <label htmlFor="">image</label><br />
            <input type="text" name="image" id="image" value={product.image} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' /><br /><br />
            <label htmlFor="">description</label><br />
            <input type="text" name="description" id="description" value={product.description} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]'/><br /><br />
            <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-white text-center md:w-[420px]' onClick={handleSubmit}>Add product</button>
        </form>
  </div>
    </div>
</div>
  )
}

export default AdminProductsEdit

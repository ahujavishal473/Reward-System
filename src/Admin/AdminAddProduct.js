import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminAddProduct = () => {
    const navigate=useNavigate()
    const [addProducts,setAddProducts]=useState({
        title:'',
        points:'',
        brand:'',
        category:'',
        image:'',
        description:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setAddProducts({
            ...addProducts,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:3000/products',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(addProducts)
        })
        navigate('/admin/products')

    }
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 max-w-screen h-screen flex justify-center'>
        <div className='flex flex-col justify-center border rounded-xl  p-5 bg-white lg:w-[500px] m-auto'>
        <div  className='text-4xl text-center font-bold p-5'>Add Products</div>
        <div className='flex items-start p-5'>
            <form action="">
                <label htmlFor="">title</label><br />
                <input type="text" name="title" id="title" value={addProducts.title} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' /><br /><br />
                <label htmlFor="">points</label>
                <input type="number" name="points" id="points" value={addProducts.points} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' /><br /><br />
                <label htmlFor="">brand</label><br />
                <input type="text" name="brand" id="brand" value={addProducts.brand} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]'/><br /><br />
                <label htmlFor="">category</label><br />
                <input type="text" name="category" id="category" value={addProducts.category} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' /><br /><br />
                <label htmlFor="">image</label><br />
                <input type="text" name="image" id="image" value={addProducts.image} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' /><br /><br />
                <label htmlFor="">description</label><br />
                <input type="text" name="description" id="description" value={addProducts.description} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]'/><br /><br />
                <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-white text-center md:w-[420px]' onClick={handleSubmit}>Add product</button>
            </form>
      </div>
        </div>
    </div>
  )
}

export default AdminAddProduct

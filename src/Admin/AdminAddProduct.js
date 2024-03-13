import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminAddProduct = () => {
    const navigate = useNavigate()
    const [addProducts, setAddProducts] = useState({
        title: '',
        points: '',
        brand: '',
        category: '',
        image: '',
        description: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setAddProducts({
            ...addProducts,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/products', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addProducts)
        })
        navigate('/admin/products')

    }
    return (

        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-xl p-5 lg:w-[500px]">
                <div className="text-4xl text-center font-bold">Add products</div>
                <div className="flex items-start p-5">
                    <form action="" onSubmit={handleSubmit} className="space-y-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">title</label>
                        <input type="text" name="title" id="title" value={addProducts.title} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">points</label>
                        <input type="number" name="points" id="points" value={addProducts.points} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">brand</label>
                        <input type="text" name="brand" id="brand" value={addProducts.brand} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">category</label>
                        <input type="text" name="category" id="category" value={addProducts.category} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">image</label>
                        <input type="text" name="image" id="image" value={addProducts.image} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">description</label>
                        {/* <textarea name="" id="" cols="55" rows="5" value={addProducts.description} onChange={handleChange} className='border p-2 border-gray-500'></textarea> */}
                        <input type='text' name="description" id="description" value={addProducts.description} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white text-center py-2 md:w-[420px]' onClick={handleSubmit}>Add product</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default AdminAddProduct

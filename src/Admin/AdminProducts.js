import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch((error)=>console.log(error))
    },[])
    console.log(products)
    const handleDelete=(id)=>{
        console.log(id)
        // axios.delete(`https://65d70b7e27d9a3bc1d79fdfd.mockapi.io/e-commerce/${id}`)
        fetch(`http://localhost:3000/products/${id}`,{
          method:"DELETE"
        })
       
    }
    return(
        <div>
            <h1>Products</h1>
            <div className='grid grid-cols-3 m-2 justify-center text-center'>
                {products.map((product)=>(
                    <div key={product.id} className='flex flex-col m-5 p-2'>
                        <div className=''><img src={product.image} alt="product" className='h-[200px] w-[200px] m-auto' /></div>
                        <div>{product.title}</div>
                        <div>points:{product.points}</div>
                        <div className='flex flex-row justify-center'>
                        <Link to={`/admin/editProduct/${product.id}`}><button className='border border-1 border-black px-2 mx-2'>Edit</button></Link>
                        <button className='border border-1 border-black px-2 mx-2' onClick={()=>handleDelete(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default AdminProducts

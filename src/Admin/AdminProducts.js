import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [search,setSearch]=useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    // Replace with actual delete logic using axios
    // axios.delete(`https://65d70b7e27d9a3bc1d79fdfd.mockapi.io/e-commerce/${id}`)
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    })
  };

  return (
    <div className='container mx-auto p-4 bg-[#f0f3f8] no-scrollbar'>
          <div className='flex flex-row justify-between'>
              <div className='text-2xl font-semibold'>Product Details</div>
              <div>
                <Link to={'/admin/addproduct'} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Products
                </Link>
              </div>
          </div>
          {/* <div className='flex'>
            <div className='search flex mt-4 items-center text-xl text-gray-400  '>
              <BsSearch />
              <div className='flex ' >
              <input type="text" name="search" id="search" className='bg-none' placeholder='search here.....' onChange={(e)=>setSearch(e.target.value)}  />
              </div>
            </div>
          </div> */}
      <table className='w-full border-collapse border border-gray-300 mt-6'>
        <thead className='font-satoshi'>
          <tr className='bg-gray-200'>
            <th className='p-4'>Image</th>
            <th className='p-4 text-left'>Title</th>
            <th className='p-4'>Brand</th>
            <th className='p-4'>Points</th>
            <th className='p-4'>Actions</th>
          </tr>
        </thead>
        <tbody className='' >
          {products.filter((item)=>item.title.includes(search) || item.brand.includes(search)).map((product) => (
            <tr key={product.id} className='border-t font-clash border-gray-300 text-center '>
              <td className='p-4'>
                <img src={product.image} alt="product" className='h-16 w-16 object-contain rounded-md mx-auto' />
              </td>
              <td className='p-4 text-left'>{product.title}</td>
              <td className='p-4'>{product.brand}</td>
              <td className='p-4'>{product.points}</td>
              <td className='p-4'>
                <Link to={`/admin/editProduct/${product.id}`}>
                  <button className= " text-lg text-green-600  hover:bg-slate-300 p-2"><FiEdit/></button>
                </Link>
                <button className= " text-xl text-red-800  hover:bg-slate-300 p-2" onClick={() => handleDelete(product.id)}><MdDeleteOutline/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;

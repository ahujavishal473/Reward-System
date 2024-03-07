import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import AdminHome from './AdminHome';
import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdminProducts from './AdminProducts';
import Register from '../Component/Register';
const Admin = () => {
    const name=JSON.parse(localStorage.getItem("loginUser"))
   
  return (
    
      <div className='flex flex-row'>
        {/* left-side */}
                <div className='dashboard-left w-[200px] border border-black h-screen bg-gray-200'>
                    <div className='text-4xl text-center font-bold mt-2 text-blue-500'>Logwin</div>
                    <div className='my-4 ml-4 text-xl '><Link to='/admin'><button className='bg-blue-500 font-bold text-white py-2 px-6  rounded-xl text-start '>Dashboard</button></Link></div>
                    <div className='text-2xl font-semibold ml-4'><Link to='/admin/products'><button>Products</button></Link></div>
                    <div className='text-2xl font-semibold ml-4'><button>Orders</button></div>
                </div>
        {/* right side */}
        <div className='dashboard-right h-screen w-screen'>
         {/* heading as navbar */}
            <div className='nav border border-black m-2 p-1 flex flex-row justify-between items-baseline self-stretch'>
                <div className='flex items-baseline'>
                     <IoSearchOutline />
                    <div className='ml-5 text-gray-400 text-xl border-black'>
                        <input type="text" name="search" id="search" placeholder='Search here....' style={{ outline: 'none', border: 'none', width: '100%' }} />
                    </div>
                </div>
                <div className='mr-4'>{name.username}</div>
            </div>
            {/* content based on dashboard */}
            <div className='content'>
                <Routes>
                   <Route path='/' element={<AdminHome />} />
                   <Route path='products' element={<AdminProducts />} />
                   <Route path='addemployee' element={<Register />}/>
                </Routes>
            </div>
        </div>
      </div>
    
  )
}

export default Admin

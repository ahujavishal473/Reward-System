import React, { useEffect } from 'react'
import './Admin.css'
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { MdOutlineDashboard } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";
import AdminEmployee from './AdminEmployee'
import DashBoard from './DashBoard';
import Register from './Register'
import './Admin.css'
import AdminProducts from './AdminProducts';
import AdminAddProduct from './AdminAddProduct';
import AdminProductsEdit from './AdminProductsEdit';
import AdminEdit from './AdminEdit';
import Reward from './Reward';
import Point from './Point';
import RewardEdit from './RewardEdit';
import { CiGift } from "react-icons/ci";
const Admin = () => {
  const [isLogin, setisLogin] = useState(false)
  const navigate = useNavigate()
  const name = JSON.parse(localStorage.getItem("loginUser"))

  const status = !!name

  useEffect(() => {
    setisLogin(status)
  }, [status])
  const handleLogout=()=>{
    localStorage.removeItem("loginUser")
    navigate('/')
  }
  return (
    <div className='container max-w-none '>
      {/* left-side */}
      <div className='dashboard-left h-full w-[200px] fixed top-0 left-0 border border-black bg-[#343a40] '>
        <div className='company text-4xl pl-3 text-white font-bold mt-2'>Logwin</div>
        <div className='flex flex-col gap-2 mt-5 text-[17px] text-[#767e87] p-3'>
          <div className='dashboard  flex flex-row items-center  font-semibold'>
            <NavLink to='/admin/dashboard'>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineDashboard />
                DashBoard
              </div>
            </NavLink>
          </div>

          <div className='employee flex flex-row items-center  font-semibold'>
            <NavLink to='/admin/employee'>
              <div className='flex flex-row items-center gap-2'>
                <FiUser />
                Employee
              </div>
            </NavLink>
          </div>

          <div className='products   flex flex-row items-center  font-semibold'>
            <NavLink to='/admin/products'>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineInventory2 />
                Products</div>
            </NavLink>
          </div>

          <div className='products   flex flex-row items-center  font-semibold'>
            <NavLink to='/admin/reward'>
              <div className='flex flex-row items-center gap-2'>
              <CiGift />
                Rewards</div>
            </NavLink>
          </div>

          <div className='order   flex flex-row items-center  font-semibold'>
            <NavLink to='/admin/orders'>
              <div className='flex flex-row items-center gap-2'>
                <PiShoppingCartSimpleBold />
                Orders
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='dashboard-right ml-[200px]'>
        {/* heading as navbar */}
        <div className='header flex flex-row  justify-between p-4 sticky top-0 z-10  bg-white self-stretch items-baseline'>
          <div className='name text-[#6c757d] text-2xl font-semibold'>Welcome Admin</div>
          <div className='login text-[#767e87] '>
            {
              isLogin?<button onClick={()=>handleLogout()} className='text-xl bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-700' >Logout</button>:<button>Login</button>
            }
          </div>
        </div>
        {/* content based on dashboard */}
        <div className='content bg-[#f0f3f8]'>

          <Routes>
            <Route path='/dashboard'  element={<DashBoard />} />
            <Route path='employee' element={<AdminEmployee />} />
            <Route path='products' element={<AdminProducts />} />
            <Route path='addemployee' element={<Register />} />
            <Route path='addproduct' element={<AdminAddProduct />} />
            <Route path='editproduct/:id' element={<AdminProductsEdit />} />
            <Route path='editemployee/:id' element={<AdminEdit />}/>
            <Route path='reward' element={<Reward />} />
            <Route path='addrewardcategory' element={<Point />} />
            <Route path='editreward/:id' element={<RewardEdit />} />
          </Routes>
        </div>
      </div>
    </div>

  )
}

export default Admin
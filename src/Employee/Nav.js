import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import Product from './Product';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Nav = () => {

  const LoginUser = JSON.parse(localStorage.getItem("loginUser"))
  const [isLogin, setisLogin] = useState(false)
  const [isShow, setShow] = useState(false)
  // console.log(isLogin)

  useEffect(() => {
    if (!!LoginUser) {
      setisLogin(true)
    }
  }, [LoginUser])

  const handleClick=()=>{
    setShow(!isShow)
  }
  // const handleMouseEnter = () => {
  //   setShow(true)
  // }
  // const handleMouseLeave = () => {
  //   setShow(false)
  // }
  return (
    <>
      <div className='px-[5%] py-5 flex justify-between self-stretch items-baseline'>
        <div className='flex gap-5 text-2xl text-blue-950 font-semibold'>
          <div>Logwin</div>
          <div>|</div>
          <div>Rewards</div>
        </div>
        <div className='text-xl flex items-center space-x-5'>
          <div>
            {isLogin ?
              <div className='flex flex-row space-x-8 self-stretch items-baseline mr-5'>
                <div>{LoginUser.username}</div>
                <div>{LoginUser.point} points</div>
              </div> :
              <>
                <div>
                  <Link to={'/login'}>Sign in</Link>
                </div>
              </>}
          </div>
          {/* onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} */}
          <div>
              <div className=' text-gray-400 text-2xl' onClick={()=>handleClick()} ><FaUserCircle /></div>
              {isShow && isLogin ?
              <div className=''>
                <button>Order</button><br />
                <button>Logout</button>
              </div>:null}
          </div>
        </div>
        
      </div>

    </>
  )
}

export default Nav

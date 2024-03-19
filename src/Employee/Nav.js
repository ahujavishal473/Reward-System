import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import Product from './Product';
import { Link } from 'react-router-dom';
const Nav = () => {

  const LoginUser = JSON.parse(localStorage.getItem("loginUser"))
  const [isLogin, setisLogin] = useState(false)
  const [isShow, setShow] = useState(false)
  // console.log(isLogin)
  // console.log(LoginUser)
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
              <>
                <div>{LoginUser[0].username}</div>
              </> :
              <>
                <div>
                  <Link to={'/login'}>Sign in</Link>
                </div>
              </>}
          </div>
          {/* onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} */}
          <div>
              <div className=' text-gray-400 text-2xl' onClick={()=>handleClick()} ><FaUserCircle /></div>
              {/* {isShow && isLogin ?
              <>
                <button>User Information</button><br />
                <button>Logout</button>
              </>:null} */}
          </div>
        </div>
        
      </div>

    </>
  )
}

export default Nav

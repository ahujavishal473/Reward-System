import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../store/productSlice';
import Nav from './Nav';
import Point from '../Admin/Point';
import { setuserdata } from '../store/LoginSlice';
const ProductDetail = () => {
  const date=new Date()
    const d=date.getDate()
    const m=date.getMonth()+1
    const y=date.getFullYear()
    const ndate=`${d}-${m}-${y}`
    // console.log(ndate)
    const dispatch=useDispatch()
    const product=useSelector((state)=>state.product.productdetail)
    const loginUserData=useSelector((state)=>state.login.user)
    const loginId=loginUserData ? loginUserData.id :null
    // console.log(loginUserData.id,loginUserData.username,loginUserData.email,product.title,product.points,product.id,date)
    // console.log(loginUserData)
    // console.log("login ID",loginId)
    // console.log("login user data",loginUserData)
    const productPoint=parseInt(product.points)
    let userPoint=loginUserData ? parseInt(loginUserData.point) : 0
    const {id}=useParams()
    // dispatch(fetchUpdatedData(loginId))
    useEffect(()=>{
      dispatch(fetchProductDetail(id))
    },[dispatch])

    const handleReward=async(e)=>{
      e.preventDefault()
      console.log("Reedem Reward is called")
      console.log("product Point",productPoint)
      console.log("userPoint",userPoint)
      if(productPoint>userPoint){
        alert("you have not enough points")
      }
      else{
        userPoint=userPoint-productPoint
        console.log(userPoint)
        try {
          fetch(`http://localhost:3000/user/${loginId}`,{
            method:"PATCH",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
              point:userPoint
            })
          })

          fetch(`http://localhost:3000/orders`,{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
              userid:loginUserData.id,
              username:loginUserData.username,
              product_id:product.id,
              email:loginUserData.email,
              product_name:product.title,
              product_points:product.points,
              orderDate:ndate
            })
          })
          alert("order sucessfully")
          dispatch(setuserdata({...loginUserData,point:userPoint}))
        } catch (error) {
          console.log(error)
        }
      }
    }
   
  return (
  <>
  <Nav />
  <div className='bg-gray-200 px-24 pt-3'>
      {/* <h1>Product Detail Page</h1> */}
      <div className='text-gray-800 text-[17px] flex items-center space-x-3'>
        <IoIosArrowBack />
        <Link to={'/'}>Back to Home</Link> 
      </div>
      <div className='productinfo flex flex-row h-[550px] '>
        <div className='w-[40%] h-[550px] border justify-center flex items-center'>
          <img src={product.image} alt="" className='h-[400px] w-[400px] p-5 '/>
        </div>
        <div className='flex flex-col gap-4 w-[60%] justify-center p-10 border h-[500px]'>
            <div className='text-2xl font-semibold'>{product.title}</div>
            <div className='text-xl font-medium'>{product.category}</div>
            <div className='text-xl font-medium'>{product.points} points</div>
            <div className='text-xl font-medium'>{product.brand}</div>
            <div className=''>{product.description}</div>
            <div>
              <button className='text-white bg-blue-600 p-2 rounded-md hover:bg-blue-800' onClick={handleReward} >REEDEM REWARD</button>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProductDetail
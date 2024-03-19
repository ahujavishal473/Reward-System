import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../store/productSlice';
import Nav from './Nav';
import Point from '../Admin/Point';
const ProductDetail = () => {
    const LoginUser=JSON.parse(localStorage.getItem("loginUser"))
    const dispatch=useDispatch()
    const product=useSelector((state)=>state.product.productdetail)
    const {id}=useParams()
    useEffect(()=>{
      dispatch(fetchProductDetail(id))
    },[dispatch])
    // console.log(id)
    // console.log(product)
    const handleReward=(e)=>{
      e.preventDefault()
      let point=parseInt(LoginUser[0].point)
      const productPoint=parseInt(product.points)
      const id=LoginUser[0].id
      console.log("User has point:",point)
      console.log("userid",id)
      console.log("product Point",productPoint)
      if(point < product.points){
        alert("you have not points so you can buy that product")
      }
      else{
        point=point-productPoint
        console.log("updated point:",point)
          try {
            fetch(`http://localhost:3000/user/${id}`,{
              method:"PATCH",
              headers:{'content-type':'application/json'},
              body:JSON.stringify({
                point:point
              })
            })
          } catch (error) {
            console.log(error)
          }

      }
    }
  return (
  <>
  <Nav />
  <div className='bg-gray-200 px-24 pt-3 h-screen'>
      {/* <h1>Product Detail Page</h1> */}
      <div className='text-gray-800 text-[17px] flex items-center space-x-3'>
        <IoIosArrowBack />
        <Link to={'/'}>Back to Home</Link> 
      </div>
      <div className='productinfo flex flex-row h-[550px] '>
        <div className='w-[40%] h-[550px] border justify-center flex items-center'>
          <img src={product.image} alt="" className='h-[400px] w-[400px] p-5 bg-white'/>
        </div>
        <div className='flex flex-col gap-4 w-[60%] justify-center p-10 border'>
            <div className='text-2xl font-semibold'>{product.title}</div>
            <div className='text-xl font-medium'>{product.category}</div>
            <div className='text-xl font-medium'>{product.points} points</div>
            <div className='text-xl font-medium'>{product.brand}</div>
            <div className=''>{product.description}</div>
            <div>
              <button className='text-white bg-blue-600 p-2' onClick={handleReward}>REEDEM REWARD</button>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProductDetail

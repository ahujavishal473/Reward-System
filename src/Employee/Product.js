import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../store/productSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Nav from './Nav'
const Product = () => {
    const dispatch=useDispatch()
    const product=useSelector((state)=>state.product.data)
    const [search,setsearch]=useState('')
    const [displaycategory,setDisplaycategory]=useState(false)
    const [selectcategory,setselectcategory]=useState('all')
    // console.log(product)
    useEffect(()=>{
        dispatch(fetchProduct())    
    },[dispatch])
    const uniqueData=(data,property)=>{
        let newvalue=product.map((element)=>element[property])
        return (newvalue=["all",...new Set(newvalue)])
    }
    const category=uniqueData(product,"category")
    const handleClick=()=>{
        setDisplaycategory(!displaycategory)
    }
    const handleCategory=(category)=>{
        setselectcategory(category)
    }
    const filterProduct=selectcategory==='all'?product:product.filter((data)=> selectcategory.includes(data.category))
  return (
    <>
    <Nav />
    <div className='bg-gray-200 w-full min-h-[90vhe] px-24'>
        <div className='pt-3 pb-8 text-xl'>
        Unlock perks for your dedication and hard work at LogwinTech! Earn points effortlessly by contributing to our success and achieving milestones within our organization. These points can then be redeemed for a range of fantastic rewards right from our company's platform.
        </div>
        <div>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <div className='search'>
                        <input type="text" value={search} placeholder='search here' onChange={(e)=>setsearch(e.target.value)} className='w-[260px] p-2 border-2 border-gray-400'  />
                    </div>
                    <div className='category mt-5 gap-6'>
             
                        <button onClick={handleClick} className='w-[260px] p-2 border-2 border-gray-400 bg-white'>
                            <div className='flex flex-row justify-between items-center text-[17px] font-medium'>
                                <div>Category</div>
                                <div>{<FaChevronDown />}</div>
                            </div>
                        </button>
                           
                            <div>{displaycategory && 
                                <div className='flex flex-col gap-2 ml-2 text-[17px] font-medium mt-2'>
                                    {category.map((item,index)=>(
                                    <div className=' hover:bg-white p-1 ' onClick={()=>handleCategory(item)} key={index}>{item}</div>
                                    ))}
                                </div> }
                            </div>
                        
                     
                    </div>
                </div>
                <div className='product grid grid-cols-3 gap-10 mx-5'>
                    {
                        filterProduct.filter((prod)=>prod.title.toLowerCase().includes(search)).map((item)=>(
                        <div key={item.id} className='p-5 border border-black  bg-white rounded-xl transition duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-gray-400'>
                            <div className='p-2'><img src={item.image} alt="" className='w-[250px] mx-auto h-[250px] bg-white ' /></div>
                            <div className=' overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-center mt-10 text-[20px] '>{item.title}</div>
                            <div className='text-center text-[15px] text-blue-500 font-medium mt-2'>{item.points} points</div>
                            <div className='text-center flex flex-row items-center justify-center text-blue-600 font-semibold mt-2  '>
                                <Link to={`/productdetails/${item.id}`}>REEDEM REWARD </Link>
                                <div>{<MdArrowForwardIos />}</div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Product

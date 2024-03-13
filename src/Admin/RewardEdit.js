import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const RewardEdit = () => {
    const { id } = useParams()
    const navigate=useNavigate()
    const [data, setdata] = useState({
        name: '',
        point: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/Rewards/${id}`)
            .then((response) => setdata(response.data))
    },[id])
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/Rewards/${id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        navigate('/admin/reward')
    }
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-xl p-5 lg:w-[500px]">
                <div className="text-4xl text-center font-bold">Update Reward Category</div>
                <div className="flex items-start p-5">
                    <form action="" onSubmit={handleSubmit} className="space-y-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Reward category</label>
                        <input type="text" name="name" id="name" value={data.name} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Points</label>
                        <input type="number" name="point" id="point" value={data.point} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' />
                        <input type="submit" value="Update" className='bg-blue-500 hover:bg-blue-700 text-white text-center py-2 md:w-[420px]' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RewardEdit

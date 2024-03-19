import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchRewards } from '../store/RewardSlice'
// import { Reward } from './Point'

const AdminEdit = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const Reward = useSelector((state) => state.reward)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const [checkedBox, setCheckedBox] = useState([]);
    const [userdata, setuserData] = useState({
        username: '',
        email: '',
        role: '',
        point: ''
    })

    useEffect(() => {
        dispatch(fetchRewards())
    }, [])


    useEffect(() => {
        setCheckedBox(new Array(Reward.length).fill(false));
        axios.get(`http://localhost:3000/user/${id}`)
            .then((response) => {
                setuserData(response.data)
                setTotal(parseInt(response.data.point))
            })
    }, [Reward, id])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserData({
            ...userdata,
            point: total,
            [name]: value
        })
    }


    const handleCheckBox = (position) => {
        const UpdateCheckBox = checkedBox.map((item, index) => (
            index === position ? !item : item
        ))
        setCheckedBox(UpdateCheckBox)
        const totalPoints = UpdateCheckBox.reduce((sum, currentState, index) => {
            if (currentState === true) {
                return sum + parseInt(Reward[index].point)
            }
            return sum
        }, parseInt(userdata.point))
        setTotal(totalPoints)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/user/${id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                ...userdata,
                point: total,
            })
        })
        setuserData({
            username: '',
            email: '',
            role: '',
            point: ''
        })
        navigate('/admin/employee')
    }

    return (
        <div className='flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center  rounded-xl p-5 lg:w-[500px]">
                <div className="text-4xl text-center font-bold">Update Employee Details</div>
                <div className="flex items-start p-5">
                    <form action="" onSubmit={handleUpdate}>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 pt-2" >Username</label><br />
                        <input type="text" name="username" id="username" value={userdata.username} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md" required/><br /><br />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Email</label><br />
                        <input type="email" name="email" id="email" value={userdata.email} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md" required /><br /><br />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Role</label><br />
                        <select name="role" id="role" value={userdata.role} onChange={handleChange} className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md">
                            <option value="">select</option>
                            <option value="hr">HR</option>
                            <option value="employee">Employee</option>
                        </select><br /><br />
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Points</label><br />
                        {
                            Reward.length > 0 && Reward.map((item, index) => (
                                <div key={index}>
                                    <input type="checkbox" className='mr-2' name={item.name} id={index} value={item.name} checked={checkedBox[index]} onChange={() => handleCheckBox(index)} />
                                    <label htmlFor="" className=''>{item.name}-</label>
                                    <span>{item.point}</span>

                                </div>
                            ))
                        }
                        <div className='mt-2'>Total Points:{total}</div><br />
                        {/* <input type="number" name="point" id="point" value={total}  className="border p-2 border-gray-500 w-[420px] h-[40px] rounded-md" /><br /><br /> */}
                        <input type="submit" value="update" className="bg-blue-500 hover:bg-blue-700 py-2 text-white text-center w-[420px] rounded-md" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AdminEdit

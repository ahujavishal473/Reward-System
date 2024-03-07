import React, { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: '',
        password: '',
        point:0
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted")
        console.log("form submitted data", formData)
      
            fetch('http://localhost:3000/user', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(formData)
            }
            )
       
        setFormData({
            username: '',
            email: '',
            role: '',
            password: ''
        })
    }
    return (
       
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-sceen h-screen flex justify-center'>
             <div className='flex flex-col justify-center border rounded-xl  p-5 bg-white lg:w-[500px] m-auto'>
                 <div className='text-4xl text-center font-bold p-5'>Add a Employee</div>
                 <div className='flex items-start p-5'>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">UserName:</label><br />
                        <input type="text" name="username" id="username" placeholder='enter a username' value={formData.username} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' required /><br /><br />
                        <label htmlFor="">Email</label><br />
                        <input type='email' name="email" id="email" placeholder='enter a email' value={formData.email} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' required /><br /><br />
                        <label htmlFor="">Role</label>
                        <select name="role" id="role" value={formData.role} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' required>
                            <option value="">Select</option>
                            <option value="hr">HR</option>
                            <option value="employee">Employee</option>
                        </select><br /><br />
                        <label htmlFor="">Password</label><br />
                        <input type="password" name="password" id="password" placeholder='enter a password' value={formData.password} onChange={handleChange} className='border p-2 border-gray-500 md:w-[420px] md:h-[40px]' required /><br /><br />
                        <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-white text-center md:w-[420px]'>Login</button>
                    </form>
                </div>
            </div>
        </div>
  
    )
}

export default Register

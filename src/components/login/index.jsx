import React, { useState } from 'react'
import './login.scss'
import toast from 'react-hot-toast'

export default function Login() {
    const [user, setUser] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handlesubmit = () => {
        const users = JSON.parse(localStorage.getItem("users"))
        const foundUser = users.find(
            (u) => u.email === user.email && u.password === user.password
        );
        if (foundUser) {
            localStorage.setItem("isLogin", "true")
            localStorage.setItem("isSignup", "true")
            toast.success("login successfully")
            window.location.reload();
        }
        else {
            toast.error("invalid credentials")
        }
    }
    return (
        <>
            <div className='login-form'>
                <div className='bg-color'>
                    <div>
                        <label>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            id='password'
                            required
                            name='password'
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handlesubmit} type="submit" className='submit-button'>Login</button>
                </div>
            </div >
        </>
    )
}

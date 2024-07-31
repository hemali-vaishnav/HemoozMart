import React, { useState } from 'react'
import './signyp.scss'

export default function Signup() {
    const [userdata, setUserdata] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        errors: {},
    });


    return (
        <>
            <div className='signup-form'>
                <div className='bg-color'>
                    <div className='form-heading'>
                        <h4>Create an account</h4>
                    </div>
                    <div>
                        <label>First name</label>
                        <input
                            id="fname"
                            name="fname"
                        />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input
                            id='lname'
                            name='lname'
                            />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                           />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            />
                    </div>
                    <button className='submit-button' >SignUp</button>
                    <div className='text'>
                        <p>Already have an account?</p><span>Login</span>
                    </div>
                </div>
            </div>
        </>
    )
}

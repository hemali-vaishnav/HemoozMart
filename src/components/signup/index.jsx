import React from 'react'
import './signyp.scss'

export default function Signup() {
    return (
        <>
            <div className='signup-form'>
                <div className='bg-color'>
                    <div>
                        <label>First name</label>
                        <input id="fname" name="fname" />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input id='lname' name='lname' />
                    </div>
                    <div>
                        <label >Email</label>
                        <input id='email' name='email' />
                    </div>
                    <div>
                        <label >Password</label>
                        <input type="password" id='password' name='password' />
                    </div>
                    <button className='submit-button'>SignUp</button>
                </div>
            </div>
        </>
    )
}

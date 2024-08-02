import React, { useEffect, useState } from 'react'
import './signup.scss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Signup() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (id !== undefined && users[id] !== undefined) {
            setUser(users[id]);
        }
    }, [id, users]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (
            user.firstname.trim() !== "" &&
            user.lastname.trim() !== "" &&
            user.email.trim() !== "" &&
            user.password.trim() !== ""
        ) {
            const updatedUsers = [...users];
            if (id !== undefined && users[id] !== undefined) {
                updatedUsers[id] = user;
            } else {
                updatedUsers.push(user);
            }

            localStorage.setItem("users", JSON.stringify(updatedUsers));
            setUsers(updatedUsers);
            setUser({ firstname: "", lastname: "", email: "", password: "" });
            toast.success(`Your account ${id !== undefined ? 'updated' : 'created'} successfully`);
            localStorage.setItem("isSignup", "true");
            navigate("/");
        } else {
            toast.error("Please fill in all fields.");
        }
    };

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
                            name="firstname"
                            required
                            // value={user.firstname}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input
                            name='lastname'
                            required
                            // value={user.lastname}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            required
                            // value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name='password'
                            required
                            // value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className='submit-button' onClick={handleSubmit} type='submit'>SignUp</button>
                    <div className='text'>
                        <p>Already have an account?</p><Link to={"/login"}>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}



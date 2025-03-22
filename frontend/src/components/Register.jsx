import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            alert(response.data.message);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            alert('Registration failed! Please check your input or try again.');
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-8 shadow-md rounded" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Register</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="block w-full mb-3 p-2 border"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full mb-3 p-2 border"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="block w-full mb-3 p-2 border"
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

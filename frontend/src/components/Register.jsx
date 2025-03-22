import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col items-center">
            <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="Registration Logo"
                className="w-24 mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Register</h2>
            <form className="w-full">
                <div className="mb-4">
                    <label className="block text-blue-800 font-medium mb-2">Full Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-800 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6 relative">
                    <label className="block text-blue-800 font-medium mb-2">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Create a password"
                    />
                    <span
                        className="absolute right-3 top-9 text-gray-600 cursor-pointer"
                        onClick={togglePassword}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button className="w-full py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                    Register
                </button>
            </form>
            <p className="mt-4 text-blue-700">
                Already have an account?{" "}
                <a href="/" className="text-blue-500 underline">Login</a>
            </p>
        </div>
    );
}

export default Register;

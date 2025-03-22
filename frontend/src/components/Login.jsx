import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => setShowPassword(!showPassword);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        // Dummy credentials
        if (email === "user@example.com" && password === "password123") {
            navigate("/home");
        } else {
            alert("Invalid email or password. Try again.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-br from-blue-900 to-gray-800">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="User Logo"
                    className="w-24 mb-4 mx-auto"
                />
                <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Login</h2>
                <form className="w-full" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-blue-800 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-blue-800 font-medium mb-2">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                        <span
                            className="absolute right-3 top-9 text-gray-600 cursor-pointer"
                            onClick={togglePassword}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

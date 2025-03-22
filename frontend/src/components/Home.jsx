import React from "react";
import { Link } from "react-router-dom";
import { User, Bell, CheckCircle, Lock, LogOut } from "lucide-react";



function Home() {
    return (
        <div className="min-h-screen bg-gray-100 font-josefin">
            {/* Navbar */}
            <nav className="bg-blue-900 text-white shadow-md py-4 px-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-wide">Voting App</h1>
                <div className="space-x-6 flex items-center">
                    <Link to="/home" className="hover:text-gray-300 flex items-center">
                        <User className="mr-1" /> Home
                    </Link>
                    <Link to="/profile" className="hover:text-gray-300 flex items-center">
                        <User className="mr-1" /> Profile
                    </Link>
                    <Link to="/notifications" className="hover:text-gray-300 flex items-center">
                        <Bell className="mr-1" /> Notifications
                    </Link>
                    <Link to="/verify-voters" className="hover:text-gray-300 flex items-center">
                        <CheckCircle className="mr-1" /> Verify Voters
                    </Link>
                    <Link to="/authentication" className="hover:text-gray-300 flex items-center">
                        <Lock className="mr-1" /> Authentication
                    </Link>
                    <Link
                        to="/"
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition flex items-center"
                    >
                        <LogOut className="mr-1" /> Logout
                    </Link>
                </div>
            </nav>

            {/* Page Content */}
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg w-full text-center">
                    <h2 className="text-4xl font-semibold text-blue-900 mb-4">Welcome to the Home Page!</h2>
                    <p className="text-gray-600 mb-6 text-lg">Navigate using the options above.</p>
                    <div className="grid grid-cols-2 gap-4">
                    <Link
    to="/profile"
    className="bg-blue-800 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center space-x-2 font-medium"
>
    <User /> <span>Profile</span>
</Link>

                        <Link
                            to="/notifications"
                            className="bg-blue-800 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center space-x-2 font-medium"
                        >
                            <Bell /> <span>Notifications</span>
                        </Link>
                        <Link
                            to="/verify-voters"
                            className="bg-blue-800 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center space-x-2 font-medium"
                        >
                            <CheckCircle /> <span>Verify Voters</span>
                        </Link>
                        <Link
                            to="/authentication"
                            className="bg-blue-800 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center space-x-2 font-medium"
                        >
                            <Lock /> <span>Authentication</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

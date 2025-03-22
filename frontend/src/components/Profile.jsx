import React, { useState } from "react";

function Profile() {
    const [bioData, setBioData] = useState({
        name: "",
        age: "",
        email: "",
        address: "",
        bio: "",
    });

    const handleChange = (e) => {
        setBioData({ ...bioData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Bio data saved successfully!");
    };

    return (
        <div className="min-h-screen bg-gray-100 font-josefin flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-3xl">
                <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Profile Page</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={bioData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={bioData.age}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your age"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={bioData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={bioData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Bio:</label>
                        <textarea
                            name="bio"
                            value={bioData.bio}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Write a brief bio"
                            rows="3"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-medium"
                    >
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Profile;

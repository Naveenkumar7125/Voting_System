import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Authentication = () => {
    const [voters, setVoters] = useState([]);

    useEffect(() => {
        fetchVoters();

        socket.on("voterVerified", (updatedVoter) => {
            setVoters((prevVoters) =>
                prevVoters.map((voter) =>
                    voter.id === updatedVoter.id ? { ...voter, verified: true } : voter
                )
            );
        });

        socket.on("resetVoters", () => {
            setVoters((prevVoters) =>
                prevVoters.map((voter) => ({ ...voter, verified: false }))
            );
        });

        socket.on("duplicateVoter", (data) => {
            alert(`⚠️ ${data.message}`);
        });

        return () => {
            socket.off("voterVerified");
            socket.off("resetVoters");
            socket.off("duplicateVoter");
        };
    }, []);

    const fetchVoters = async () => {
        try {
            const response = await axios.get("http://localhost:5000/voters");
            setVoters(response.data);
        } catch (error) {
            console.error("❌ Error fetching voters:", error);
        }
    };

    const resetVoters = async () => {
        try {
            await axios.post("http://localhost:5000/reset");
        } catch (error) {
            console.error("❌ Error resetting voters:", error);
        }
    };

    return (
        <div className="flex flex-col items-center mt-10 font-josefin bg-gray-900 text-white min-h-screen">
            <h2 className="text-3xl font-bold text-blue-400 drop-shadow-md">🗳️ Voter Verification System</h2>
            <button
                onClick={resetVoters}
                className="mt-5 px-6 py-2 text-lg font-semibold bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-md shadow-md"
            >
                🔄 Reset All
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5">
                {voters.map((voter) => (
                    <div
                        key={voter.id}
                        className={`w-80 p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 
                        ${voter.verified ? "border-green-400 bg-green-900 text-green-300" : "border-red-400 bg-red-900 text-red-300"} border-l-8`}
                    >
                        <h2 className="text-xl font-bold uppercase tracking-wider">{voter.name}</h2>
                        <p className="text-sm mt-2"><strong>ID:</strong> {voter.id}</p>
                        <p className="mt-3 text-lg font-semibold">{voter.verified ? "✅ Verified" : "❌ Not Verified"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Authentication;

import React, { useState } from "react";

const voters = [
  {
    serialNumber: "1256",
    name: "கிருஷ்ணவேணி",
    fatherName: "செல்வராஜ்",
    houseNumber: "2-151",
    age: "64",
    gender: "பெண்",
    voterId: "RTW1817717",
    photo: "https://res.cloudinary.com/dprwjya79/image/upload/v1741578907/Criminal_Photos/nqvcaeuambtokowjmdzc.jpg",
  },
  {
    serialNumber: "1257",
    name: "அருள்வேலன்",
    fatherName: "முருகேசன்",
    houseNumber: "5-210",
    age: "42",
    gender: "ஆண்",
    voterId: "RTW1817718",
    photo: "https://res.cloudinary.com/dprwjya79/image/upload/v1741578907/Criminal_Photos/nqvcaeuambtokowjmdzc.jpg",
  },
  {
    serialNumber: "1258",
    name: "சந்தோஷ்",
    fatherName: "சரவணன்",
    houseNumber: "3-99",
    age: "30",
    gender: "ஆண்",
    voterId: "RTW1817719",
    photo: "https://res.cloudinary.com/dprwjya79/image/upload/v1741578907/Criminal_Photos/nqvcaeuambtokowjmdzc.jpg",
  },
  {
    serialNumber: "1259",
    name: "மல்லிகா",
    fatherName: "ராமசாமி",
    houseNumber: "4-105",
    age: "52",
    gender: "பெண்",
    voterId: "RTW1817720",
    photo: "https://res.cloudinary.com/dprwjya79/image/upload/v1741578907/Criminal_Photos/nqvcaeuambtokowjmdzc.jpg",
  },
  {
    serialNumber: "1260",
    name: "குமார்",
    fatherName: "வெங்கடேஷ்",
    houseNumber: "6-88",
    age: "36",
    gender: "ஆண்",
    voterId: "RTW1817721",
    photo: "https://res.cloudinary.com/dprwjya79/image/upload/v1741578907/Criminal_Photos/nqvcaeuambtokowjmdzc.jpg",
  },
];

const VoterVerification = () => {
  const [verified, setVerified] = useState(Array(voters.length).fill(false));

  const handleVerify = (index) => {
    setVerified((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 gap-6 p-4">
      {voters.map((voter, index) => (
        <div
          key={index}
          className="bg-white p-4 shadow-lg rounded-lg w-[500px] border border-gray-300 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="border px-3 py-1 text-lg font-semibold bg-gray-200">{voter.serialNumber}</div>
            <div className="text-lg font-semibold text-gray-600">{voter.voterId}</div>
          </div>
          <div className="border-b mb-2"></div>
          <div className="flex justify-between">
            <div className="text-lg space-y-1">
              <p><span className="font-semibold">பெயர்:</span> {voter.name}</p>
              <p><span className="font-semibold">கனவர் பெயர்:</span> {voter.fatherName}</p>
              <p><span className="font-semibold">வீட்டு எண்:</span> {voter.houseNumber}</p>
              <p>
                <span className="font-semibold">வயது:</span> {voter.age}
                <span className="ml-4">பாலினம்: {voter.gender}</span>
              </p>
            </div>
            <img
              src={voter.photo}
              alt="Voter"
              className="w-24 h-32 border ml-4 rounded-lg shadow-sm"
            />
          </div>
          <div className="mt-4 flex justify-end">
            {verified[index] ? (
              <button
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full transition duration-300 ease-in-out hover:bg-green-600 hover:scale-105"
                disabled
              >
                ✅ Verified
              </button>
            ) : (
              <button
                onClick={() => handleVerify(index)}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105"
              >
                Verify
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VoterVerification;

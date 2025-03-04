import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface"; 

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users")  
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  const saveCandidate = (candidate: Candidate) => {
    const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    savedCandidates.push(candidate);
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
    setCurrentIndex(currentIndex + 1);
  };

  const skipCandidate = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const currentCandidate = candidates[currentIndex];

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-white text-2xl font-bold mb-6">Candidate Search</h2>
      
      {currentCandidate ? (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96 text-center">
          <img 
            src={currentCandidate.avatar_url} 
            alt={currentCandidate.login} 
            className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-white"
          />
          <p className="text-xl font-semibold">{currentCandidate.name || "No name available"}</p>
          <p className="text-sm text-gray-300">{currentCandidate.location || "Location: N/A"}</p>
          <p className="text-sm">{currentCandidate.email || "Email: Not available"}</p>
          <p className="text-sm">{currentCandidate.company || "Company: N/A"}</p>
          <p className="text-sm italic">{currentCandidate.bio || "No bio available"}</p>

          <p className="mt-4">
            <a 
              href={currentCandidate.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 underline"
            >
              View GitHub Profile
            </a>
          </p>

          <div className="flex justify-center mt-4 space-x-4">
            <button 
              onClick={skipCandidate} 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Skip
            </button>
            <button 
              onClick={() => saveCandidate(currentCandidate)} 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-white">No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const location = useLocation();

  useEffect(() => {
   
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      try {
        const parsedCandidates: Candidate[] = JSON.parse(storedCandidates);
        setSavedCandidates(parsedCandidates);
      } catch (error) {
        console.error("Error parsing savedCandidates:", error);
      }
    }
  }, [location.pathname]);

  return (
    <div className="mt-12 p-6">
      <h2 className="text-center text-white text-2xl font-bold mb-6">Saved Candidates</h2>

      {savedCandidates.length === 0 ? (
        <p className="text-center text-white">No saved candidates available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-600 text-white">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="border border-gray-600 p-2">Avatar</th>
                <th className="border border-gray-600 p-2">Name</th>
                <th className="border border-gray-600 p-2">Location</th>
                <th className="border border-gray-600 p-2">Email</th>
                <th className="border border-gray-600 p-2">Company</th>
                <th className="border border-gray-600 p-2">GitHub</th>
                <th className="border border-gray-600 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {savedCandidates.map((candidate) => (
                <tr key={candidate.login} className="bg-gray-700 hover:bg-gray-600">
                  <td className="border border-gray-600 p-2">
                    <img src={candidate.avatar_url} alt={candidate.name} width="50" className="rounded-full" />
                  </td>
                  <td className="border border-gray-600 p-2">{candidate.name || "N/A"}</td>
                  <td className="border border-gray-600 p-2">{candidate.location || "N/A"}</td>
                  <td className="border border-gray-600 p-2">{candidate.email || "N/A"}</td>
                  <td className="border border-gray-600 p-2">{candidate.company || "N/A"}</td>
                  <td className="border border-gray-600 p-2">
                    <a href={candidate.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                      View Profile
                    </a>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                      onClick={() => {
                        const updatedCandidates = savedCandidates.filter((c) => c.login !== candidate.login);
                        setSavedCandidates(updatedCandidates);
                        localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SavedCandidates;

import { Outlet } from 'react-router-dom';  // Removed Router, Routes, and Route imports
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet /> {/* This will render the nested routes (CandidateSearch or SavedCandidates) */}
      </main>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import CustomCursor from './components/Common/CustomCursor';
import PageLoader from './components/PageLoader/PageLoader';

function App() {
  return (
    <>
    <PageLoader/>
    <CustomCursor/>
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;

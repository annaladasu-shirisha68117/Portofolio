import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import React from 'react';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <div className='container'>
   <Main />
   <Skills/>
   <WorkExperience/>
   <ContactMe/>
   </div>
   <Footer/>
   </>
  );
}

export default App;
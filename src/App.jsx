import Header from './components/header/header.jsx';
import React from 'react';
import './App.css';
import CompanySection from './components/CompanySection/Company.jsx';
import AllInOne from './components/AllInOne/AllInOne.jsx';
import WhatIsSkilline from './components/WhatIsSkilline/Wis.jsx';
import Classroom from './components/Classroom/Classroom.jsx';
import Features from './components/OurFeatures/Features.jsx';
import Integration from './components/Integrations/Integration.jsx';
function App() {
  return (
    <>
      
      <Header />
      <CompanySection />
      <AllInOne />
      <WhatIsSkilline />
      <Classroom />
      <Features />
      <Integration />
    </>
  );
}

export default App;
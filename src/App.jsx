import Header from './components/header/header.jsx';
import React from 'react';
import './App.css';
import CompanySection from './components/CompanySection/Company.jsx';
import AllInOne from './components/AllInOne/AllInOne.jsx';
import WhatIsSkilline from './components/WhatIsSkilline/Wis.jsx';
import Classroom from './components/Classroom/Classroom.jsx';
import Features from './components/OurFeatures/Features.jsx';
import Integration from './components/Integrations/Integration.jsx';
import Testimonial from './components/Testimonials/Testimonial.jsx';
import News from './components/News/News.jsx';
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
      <Testimonial />
      <News />
    </>
  );
}

export default App;
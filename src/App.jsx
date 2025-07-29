import Header from './components/header/header.jsx';
import React from 'react';
import './App.css';
import CompanySection from './components/CompanySection/company.jsx';
import AllInOne from './components/AllInOne/AllInOne.jsx';

function App() {
  return (
    <>
      <Header />
      <CompanySection />
      <AllInOne />
    </>
  );
}

export default App;
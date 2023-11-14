import React from 'react';
import Navbar from '../components/navBar';
import Tabsbar from '../components/tabsBar';
import houseCircle from '../assets/houseCircle.png';

const LandingPage = () => {
  return (
    <div>
    <div className="landingWrapper">
      <Navbar />
      <div className="imageDiv">
        <img src={houseCircle} alt="House" className="centered-image"/>
        </div>
        <br/>
      <Tabsbar />
      </div>
    </div>
  );
};

export default LandingPage;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';
import Header from './Header/Header';



class AboutUs_Route extends Component {
  render() {
    return (

      <div >
        <Header/>
        <AboutUs/>
        <Footer/>
        


      </div>


    );
  }
}

export default AboutUs_Route;

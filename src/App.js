import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Promotion from './components/Promotion/Promotion';
import Service from './components/Service/Service';
import { Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <div >
      <Header/>
      <Route exact = {true} path = "/" component = {Home} />
      <Route path="/Register" component={Register} />
      <Route path="/promotion" component={Promotion} />
      <Route path="/Service-Tracking" component={Service} />
      <Footer/>
      </div>


    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Promotion from './components/Promotion/Promotion';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';
import Dashboard from './components/Service/Dashboard';
import Tracking from './components/Service/Tracking';
import CreateOrder from './components/Service/CreateOrder';



class App extends Component {
  render() {
    return (

      <div >
      <Header/>
      <Route exact = {true} path = "/" component = {Home} />
      <Route path="/Register" component={Register} />
      <Route path="/promotion" component={Promotion} />
      <Route path="/Service" component={Dashboard} />
      <Route path="/Service-Tracking" component={Tracking} />
      <Route path="/Service-CreateOrder" component={CreateOrder} />
      <Route path="/Login" component={Login} />
      <Footer/>
      </div>


    );
  }
}

export default App;

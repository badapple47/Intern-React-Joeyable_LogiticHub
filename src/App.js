import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home_Route from './components/Home';
import Home_Route2 from './components/Home2';
import Register_Route from './components/Register';
import Promotion_Route from './components/Promotion';
import Login from './components/Login/Login';
import Dashboard from './components/Service/Dashboard';
import Tracking from './components/Service/Tracking';
import CreateOrder from './components/Service/CreateOrder';
import Booking from './components/Service/Booking';
import Booking_Dropoff from './components/Service/Booking-Dropoff';
import Booking_Checkinfo from './components/Service/Booking-Checkinfo';
import Booking_Payment from './components/Service/Booking-Payment';
import Booking_Complete from './components/Service/Booking-Complete';
import CreateOrder_Logistic from './components/Service/CreateOrder-Logistic';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'






class App extends Component {




  render() {



    return (

      <div >
      

      
      
      <Route exact = {true} path = "/" component = {Home_Route} />


      <Route path="/Home-Member" component={Home_Route2} />
      <Route path="/Register" component={Register_Route} />
      <Route path="/promotion" component={Promotion_Route} />
      <Route path="/Service" component={Dashboard}  />
      <Route path="/Service-Tracking" component={Tracking} />
      <Route path="/Service-CreateOrder" component={CreateOrder} />
      <Route path="/Service-Booking" component={Booking} />
      <Route path="/Service-Booking-Dropoff" component={Booking_Dropoff} />
      <Route path="/Service-Booking-Checkinfo" component={Booking_Checkinfo} />
      <Route path="/Service-Booking-Payment" component={Booking_Payment} />
      <Route path="/Service-Booking-Complete" component={Booking_Complete} />
      <Route path="/Service-CreateOrder-Logistic" component={CreateOrder_Logistic} />
      <Route path="/Login" component={Login} />

      <Route path="/Service" component={Dashboard} />

      
      

 


      </div>


    );
  }
}

export default App;


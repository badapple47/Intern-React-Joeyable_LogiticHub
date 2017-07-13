import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Promotion from './components/Promotion/Promotion';
import Login from './components/Login/Login';
import Dashboard from './components/Service/Dashboard';
import Tracking from './components/Service/Tracking';
import CreateOrder from './components/Service/CreateOrder';
import Booking from './components/Service/Booking';
import Booking_Dropoff from './components/Service/Booking-Dropoff';
import Booking_Checkinfo from './components/Service/Booking-Checkinfo';
import CreateOrder_Logistic from './components/Service/CreateOrder-Logistic';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


function loggedIn() {
  return false;
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/Register'
    })
  }
}

// function routes() {
//   return (
//     <Route path="/" component={App}>
//       <Route path="login" component={Login} />
//       <Route path="logout" component={Logout} />
//       <Route path="checkout" component={Checkout} onEnter={requireAuth} />
//     </Route>
//   );
// }


class App extends Component {




  render() {



    return (

      <div >
      <Header/>
      
      <Route exact = {true} path = "/" component = {Home} />

      {/*<Route exact path="/Service" render={() => (
      loggedIn ? (
        <Redirect to="/Service"/>
      ) : (
        <Register/>
      )
    )}/>*/}
      
      <Route path="/Register" component={Register} />
      <Route path="/promotion" component={Promotion} />
      <Route path="/Service" component={Dashboard}  />
      <Route path="/Service-Tracking" component={Tracking} />
      <Route path="/Service-CreateOrder" component={CreateOrder} />
      <Route path="/Service-Booking" component={Booking} />
      <Route path="/Service-Booking-Dropoff" component={Booking_Dropoff} />
      <Route path="/Service-Booking-Checkinfo" component={Booking_Checkinfo} />
      <Route path="/Service-CreateOrder-Logistic" component={CreateOrder_Logistic} />
      <Route path="/Login" component={Login} />
      
      <Footer/>

      {/*<Header/>
       <Route path="/" component={Home}>
      <Route path="/promotion" component={Promotion} />
      <Route path="/Register" component={Register} />
      <Route path="/Service" component={Dashboard} onEnter={requireAuth} />
    </Route>
    <Footer/>*/}


      </div>


    );
  }
}

export default App;


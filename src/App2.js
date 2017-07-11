import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Promotion from './components/Promotion/Promotion';
import Login from './components/Login/Login';
import fakeAuth from './components/Login/Login';
import Dashboard from './components/Service/Dashboard';
import Tracking from './components/Service/Tracking';
import CreateOrder from './components/Service/CreateOrder';
import Booking from './components/Service/Booking';
import Booking_Dropoff from './components/Service/Booking-Dropoff';
import Booking_Checkinfo from './components/Service/Booking-Checkinfo';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const App2 = () => (
  <Router>
    <div>
      <Header/>
      
      <Route path="/public" component={Public}/>
      <Route path="/login2" component={Login2}/>
    
      
      <Route exact = {true} path = "/" component = {Home} />
      
      <Route path="/Register" component={Register} />
      <Route path="/promotion" component={Promotion} />
      <Route path="/Service" component={Dashboard} />
      <Route path="/Service-Tracking" component={Tracking} />
      <Route path="/Service-CreateOrder" component={CreateOrder} />
      <Route path="/Service-Booking" component={Booking} />
      <Route path="/Service-Booking-Dropoff" component={Booking_Dropoff} />
      <Route path="/Service-Booking-Checkinfo" component={Booking_Checkinfo} />
      <Route path="/Login" component={Login} />
      
     
      <PrivateRoute path="/protected" component={Protected}/>
      
      <Footer/>
      
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
    </div>
  </Router>
)



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login2',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login2 extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login2 = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div>
        
      </div>
    )
  }
}

export default App2
import React, { Component } from 'react';
import Service_Dashboard from './Dashboard/Service-Dashboard';
import Service_Sidebar from './Service-Sidebar';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class Dashboard extends Component {

  render() {
    return (

      <div >
        <Header/>
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
           

            <Service_Dashboard/>
            
          
          </div>
        </div>
        <Footer/>


      </div>


    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import Service_Dashboard from './Dashboard/Service-Dashboard';
import Service_Sidebar from './Service-Sidebar';
import { Route } from 'react-router-dom';


class Dashboard extends Component {
  render() {
    return (

      <div >
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
           

            <Service_Dashboard/>
            
          
          </div>
        </div>


      </div>


    );
  }
}

export default Dashboard;

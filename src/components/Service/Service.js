import React, { Component } from 'react';

import Service_Dashboard from './Dashboard/Service-Dashboard';
import Service_CreateOrder from './Service-CreateOrder';
import Service_Tracking from './Service-Tracking';
import Service_Sidebar from './Service-Sidebar';
import { Route } from 'react-router-dom';
import Service_CreateOrder_Modal from './Service-CreateOrder-Modal';


class Service extends Component {
  render() {
    return (

      <div >
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
            <Service_CreateOrder/>
            <Service_CreateOrder_Modal/>

            {/*<Service_Dashboard/>*/}
            
            {/*<Service_Tracking />*/}
          </div>
        </div>


      </div>


    );
  }
}

export default Service;

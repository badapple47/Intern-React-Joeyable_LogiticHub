import React, { Component } from 'react';
import Service_CreateOrder from './CreateOrder/Service-CreateOrder';
import Service_Sidebar from './Service-Sidebar';
import { Route } from 'react-router-dom';
import Service_CreateOrder_Modal from './CreateOrder/Service-CreateOrder-Modal';


class CreateOrder extends Component {
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

         
          </div>
        </div>


      </div>


    );
  }
}

export default CreateOrder;

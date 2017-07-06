import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Service_Sidebar from './Service-Sidebar';
import Service_Booking from './Booking/Service-Booking';
import Service_Booking_Dropoff from './Booking/Service-Booking-Dropoff';


class Booking_Dropoff extends Component {
  render() {
    return (

      <div >
        <div className="row profile">
          <div className="col-md-3" >
            <Service_Sidebar />
          </div>

          <div className="col-md-9" >
            {/*<Service_Booking>*/}
            <Service_Booking_Dropoff/>

         
          </div>
        </div>


      </div>


    );
  }
}

export default Booking_Dropoff;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking-Dropoff.css';


class Service_Booking_Dropoff extends Component {
  render() {
    return (

      <div className="childofbooking">


        <div className="row bs-wizard " id="pginchildofbooking" >

          <div className="col-xs-2 bs-wizard-step complete">
            <div className="text-center bs-wizard-stepnum">Step 1</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <a href="#" className="bs-wizard-dot"></a>
            <div className="bs-wizard-info text-center">Choose Dropoff</div>
          </div>


          <div className="col-xs-2 bs-wizard-step active">
            <div className="text-center bs-wizard-stepnum">Step 2</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <a href="#" className="bs-wizard-dot"></a>
            <div className="bs-wizard-info text-center">Check Information</div>
          </div>

          <div className="col-xs-2 bs-wizard-step disabled">
            <div className="text-center bs-wizard-stepnum">Step 3</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <a href="#" className="bs-wizard-dot"></a>
            <div className="bs-wizard-info text-center">Payment</div>
          </div>

          <div className="col-xs-2 bs-wizard-step disabled">
            <div className="text-center bs-wizard-stepnum">Step 4</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <a href="#" className="bs-wizard-dot"></a>
            <div className="bs-wizard-info text-center">Complete</div>
          </div>

        </div>

        <center>
          <h3 id="Dropoff-choosedropofftxt">Choose Dropoff </h3>
          <div className="input-group" id="dropoffsearchbar">
            <input type="text" className="form-control" placeholder="address..." name="trackno" />


            <span className="input-group-btn">
              <button className="btn btn-default" type="Submit"  >Search</button>
              {/*<button className="btn btn-default" type="Submit" onClick={this.getTracking}>get</button>*/}
            </span>

          </div>

                             <div className="list-group" id="dropoff-locationlist">
                              <a href="#" className="list-group-item active">
                                Joeyable Bangyai
                              </a>
                              <a href="#" className="list-group-item">Joeyable RamaII</a>
                              <a href="#" className="list-group-item">Joeyable Salaya</a>
                              <a href="#" className="list-group-item">Joeyable Thonglor</a>
                              <a href="#" className="list-group-item">Joeyable Krungton</a>
                            </div>
                            
                          

        </center>


        <button type="button" className="btn purple-background white glyphicon glyphicon-arrow-right" id="service-createorder-importfilebut" aria-hidden="true">   NEXT</button>




      </div>




    );
  }
}

export default Service_Booking_Dropoff;

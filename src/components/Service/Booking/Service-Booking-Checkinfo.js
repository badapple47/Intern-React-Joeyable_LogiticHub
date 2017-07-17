import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking-Checkinfo.css';
// import LogoDHL from '../../../pic/checkinfopack.png';


class Service_Booking_Checkinfo extends Component {
  render() {
    return (

      <div className="childofbooking">

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
            <h3 id="Service-CreateOrder-miniheader">Parcel</h3>
            <hr />


          </center>

          <ul className="list-group" id="checkinfoform">
            <li className="list-group-item">TRACKNO : 1231312 Address : 201/33 Prachatutit 76 10140</li>
            <li className="list-group-item">TRACKNO : 1523212 Address : 117/33 Prachatutit 44 10140</li>
          </ul>

          {/*<div className="row" id="Body-logistic-logo">
            <div className="container">
              <div className="col-xs-6 col-md-2">
                <a href="#" className="thumbnail">
                  <img id="img-circle" src={Logo} />
                  test
                </a>
              </div>

              <div className="col-xs-6 col-md-2">
                <a href="#" className="thumbnail">
                  <img id="img-circle" src={Logo} />
                </a>
              </div>

              <div className="col-xs-6 col-md-2">
                <a href="#" className="thumbnail">
                  <img id="img-circle" src={Logo} />
                </a>
              </div>
            </div>
          </div>*/}

          <h3 id="Service-CreateOrder-miniheader">Summary</h3>
          <hr />
       
        <ul className="list-group row" id="price-superhead">
            <li className="list-group-item" id="price-head">Price</li>
          </ul>


          <div className="col-md-3">
         
          </div>


          <div className="col-md-6">
            <div className="col-md-9">
              EMS Thaipost TRACKNO : 1231312
            
            </div>
            <div className="col-md-3">
              78 BATH
            </div>

            <div className="col-md-9">
              DHL Express TRACKNO : 1934231
            
            </div>

            <div className="col-md-3">
              56 BATH
            </div>

            <div className="col-md-9">
             
            
            </div>

            <div className="col-md-3">
              <hr/>
              Total = 134 B
            </div>

          </div>
           
          




          
          <div className="col-md-3">
            
          </div>

       

          <a type="button" className="btn purple-background white glyphicon glyphicon-arrow-right" id="service-createorder-importfilebut" aria-hidden="true" href="/service-booking-payment">   NEXT</a>




        </div>







      </div>




    );
  }
}

export default Service_Booking_Checkinfo;

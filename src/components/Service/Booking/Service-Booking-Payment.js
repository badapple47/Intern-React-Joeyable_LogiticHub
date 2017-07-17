import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking-Dropoff.css';


class Service_Booking_Payment extends Component {
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
                    <h3 id="Dropoff-choosedropofftxt"> Payment </h3>
                </center>

                <div className="col-md-2">

                </div>


                <div className="col-md-8">

                    <div className="col-md-6">
                        <center>
                        <p> NO.123456789 </p>
                        </center>
                        <hr/>
                    </div>

                    <div className="col-md-6">
                        <center>
                        <p> TOTAL = 128 BATH </p>
                        </center>
                        <hr/>

                    </div>

                    <hr/>
                       


                </div>


                <div className="col-md-2">

                </div>



               













            </div>




        );
    }
}

export default Service_Booking_Payment;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking-Dropoff.css';
import axios from 'axios'


class Service_Booking_Payment extends Component {

    constructor(props) {
    super(props);
    this.state = {

    data: {},
     pricesummary : "999.99"

    }
        this.postPrice = this.postPrice.bind(this);
        {this.postPrice()}
      
    
 }

    componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://cdn.omise.co/card.js";
        script.async = true;

       

        document.body.appendChild(script);
    }

    postPrice() {
   
        console.log("post to pricesummary to backend")

        axios.post('http://localhost:3002/omise/token', this.state.pricesummary)
            .then((res) => {
                

                 console.log(res.data)
               this.setState({ data: res.data })   
            }).then(() => {
                console.log(this.state.data)

                })}



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


                    <div className="col-xs-2 bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum">Step 2</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center">Check Information</div>
                    </div>

                    <div className="col-xs-2 bs-wizard-step active">
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


<center>
    <form name="checkoutForm" method="POST" action="http://localhost:3002/omise/token"> 
       <input type="hidden" name="description" value="Product order ฿100.25" />    
    <script type="text/javascript"
      data-key="pkey_test_58owl9vixkpv13fyhdv"
      data-frame-label="Joeyable Logistic Hub"
      data-button-label="Pay now"
      data-submit-label="Submit"
      data-location="yes"
      data-amount="12800"
      data-currency="thb"
      
      >
    </script>

      </form>  


      </center>
                       


                </div>


                <div className="col-md-2">

                </div>



               













            </div>




        );
    }
}

export default Service_Booking_Payment;

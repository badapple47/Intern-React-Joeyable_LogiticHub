import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Script from 'react-load-script'
// import Calendar from './calendar'
// import './Service-Booking-Checkinfo.css';
// import LogoDHL from '../../../pic/checkinfopack.png';


class Service_History extends Component {

   constructor(props) {
    super(props);
    this.state = {

    

    }
   

 }

// componentWillMount() {
//         const script = document.createElement("script");

//         script.src = "https://cdn.omise.co/card.js";
//         script.async = true;

       

//         document.body.appendChild(script);
//     }




  render() {
    return (

      <div className="childofbooking" >

        


          <h2>Delivery History </h2>

          

      {/* <form name="checkoutForm" method="POST" action="http://localhost:3002/trackno"> 
       <input type="hidden" name="description" value="Product order ฿100.25" />    
    <script type="text/javascript"
      data-key="pkey_test_58owl9vixkpv13fyhdv"
      data-frame-label="Joeyable Logistic Hub"
      data-button-label="Pay now"
      data-submit-label="Submit"
      data-location="yes"
      data-amount="10025"
      data-currency="thb"
      
      >
    </script>

      </form>   */}

      






    
   

        {/*<Calendar/>*/}



  





      </div>




    );
  }
}

export default Service_History;

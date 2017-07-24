import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Script from 'react-load-script'
import './Service-ReceiverAddress.css';
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

            <div >




                <h2 id="ReceiverAddress-Header">Receiver Address </h2>

                <div className="col-md-8">
                    <div className="form-group">
                        <input type="text" className="form-control" id="ReceiverName" placeholder="Name" />
                        <textarea className="form-control" rows="4" id="ReceiverAddress" placeholder="Address"></textarea>
                    </div>
                </div>

                <div className="col-md-4">
                    <a type="button" className="btn purple-background white" id="ReceiverAddress-AddBut">   Add  </a>
                </div>


                

                <div className ="col-md-11" id="ReceiverAddress-Table">

                            {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}

                            <div className="method">
                                <div className="row margin-0 list-header hidden-sm hidden-xs">
                                    <div className="col-md-4"><div className="header" id="header-prepare">Receiver Name</div></div>
                                    <div className="col-md-6"><div className="header" id="header-prepare">Address</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">-</div></div>
                                    
                                </div>
                            </div>





                              
                            <div className="method">
                                <div className="row margin-0">
                                    <div className="col-md-4" >
                                        <div className="cell" >

                                            <div className="prepare-checkbox">
                                            
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="cell">
                                            <div className="prepare-trackingcode">
                                                
                                      </div>
                                        </div>
                                    </div>

                                    

                                   

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="isrequired">
                                                <button type="button" className="btn btn-default btn-block" id="paid-paynow" >DELETE</button>


                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                        

                        </div>
                        



                










            </div>




        );
    }
}

export default Service_History;

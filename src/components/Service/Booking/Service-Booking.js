import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Booking.css';


class Service_Booking extends Component {
  render() {
    return (

      <div >
          
              <div className="row" id="service-dashboard-row">
                
                    <div className="col-md-11">
                <div className="page-header">
                <h1>Create Order</h1>
                </div>
                  
                <button type="button" className="btn purple-background white glyphicon glyphicon-folder-open " id="service-booking-button-top-1" aria-hidden="true">   CreateOrder</button>
                <button type="button" className="btn purple-background white glyphicon glyphicon-folder-open " id="service-booking-button-top-2" aria-hidden="true">   ImportOrder</button>
                

                
                
                    
                    <div className="input-group">
                    <center>    
                    <input type="text" className="form-control" id="service-booking-search" placeholder="Search for..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" id="service-booking-searchb" type="button"> Search </button>
                    </span>
                    </center>    
                    </div>


                                    < div id="fourrowbutton">
                                    
                                    <button type="button" className="btn purple-background white"  id="fourbuttonrow-1">   Choose all</button>
                                    <button type="button" className="btn btn-default"  id="fourbuttonrow-2">   Remove</button>
                                    <button type="button" className="btn purple-background white"  id="fourbuttonrow-3">   Pay All</button>

                                    <nav aria-label="..." id="fourbuttonrow-4">
                                        <ul className="pager">
                                            <li><a href="#"> back </a></li>
                                            <li><a href="#"> next </a></li>
                                        </ul>
                                    </nav>

                                    
                                    </div>



                                    {/*Tracking-detial 1 */}



                           


                  <div  id="testnaja">

                      {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}
       
                      <div className="method">
                          <div className="row margin-0 list-header hidden-sm hidden-xs">
                              <div className="col-md-1"><div className="header">#</div></div>
                              <div className="col-md-2"><div className="header">Tracking Code</div></div>
                              <div className="col-md-2"><div className="header">Address</div></div>
                              <div className="col-md-2"><div className="header">Date</div></div>
                              <div className="col-md-2"><div className="header">Logistic</div></div>
                              <div className="col-md-2"><div className="header">Payment</div></div>
                              <div className="col-md-1"><div className="header">Edit</div></div>
                          </div>
                        </div>
                      
                      

                      

                          
                        <div className="method">
                          <div className="row margin-1">

                              <div className="col-md-1">
                                  <div className="cell">
                                      <div className="booking-#">
                                         #
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="booking-tracking">
                                        ET23123131
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="isrequired">
                                           201/33 Prachautid76
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="description">
                                          20/12/2999
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="propertyname">
                                          Thai post
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="type">
                                        <button type="button" className="btn purple-background white"  >   Pay now</button>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-1">
                                  <div className="cell">
                                      <div className="isrequired">
                                           Edit
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                        
                    </div>
                      
                  </div>





              {/*End Tracking-detial 1 */}
                
                
                
               
                 
                
                </div>
                </div>



      </div>


    );
  }
}

export default Service_Booking;

      
 
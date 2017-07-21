import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Dashboard-Paid.css';
import axios from 'axios'
import _ from 'lodash';

class Service_Dashboard_Paid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isLoading: true,
      isToggleOn: false,
      data:[],
      datapost: {},
      token : JSON.parse(localStorage.getItem('Token')),
      email : JSON.parse(localStorage.getItem('Email')),
      trackingresult:{trackno: "-"},
      token : "123132313",
      selectedid: {}

    }
    this.handleClick = this.handleClick.bind(this)
    this.getTracking = this.getTracking.bind(this)
    this.getTracking()
  }

getTracking() {
    axios.get(`http://localhost:3002/booking/${this.state.email}`)
      .then((response) => {

          this.setState({ data: response.data.Data })
      }).then(() => {

                console.log(this.state.data)

      })
  }

handleClick(e) {

        this.state.selectedid[e.target.name] = e.target.value
        this.setState(
            this.state

        )
    }

// postdropinformation() {
//     axios({

//                           method:'put',
//                           url:`http://localhost:3002/booking/dropoff`,
//                           data: {
//                             userinfo: this.state.userinformation,
//                             OrderId: this.state.selectedid
//                           },
//                             headers: { Authorization: this.state.token }
//                         })
//                           .then((response)=> {
//                         //   this.setState ({ data: response.data })
//                         //   localStorage.setItem('OrderId', JSON.stringify(this.state.data.OrderId));
//                         //   localStorage.setItem('PriceLogistic', JSON.stringify(this.state.data.PriceLogistic));
//                         //    console.log(this.state.Basicprofile[0].Firstname)
//                           //  console.log(this.state.Basicprofile)
//                         })
//                           .then(()=> {
//                         //   console.log(this.state.data);
//                         });
// }

// postDeleteinformation() {
//     axios({

//                           method:'delete',
//                           url:`http://localhost:3002/booking/delete/${this.state.orderId}`,
//                           data: {
//                             userinfo: this.state.userinformation
//                           },
//                             headers: { Authorization: this.state.token }
//                         })
//                           .then((response)=> {
//                         //   this.setState ({ data: response.data })
//                         //   localStorage.setItem('OrderId', JSON.stringify(this.state.data.OrderId));
//                         //   localStorage.setItem('PriceLogistic', JSON.stringify(this.state.data.PriceLogistic));
//                         //    console.log(this.state.Basicprofile[0].Firstname)
//                           //  console.log(this.state.Basicprofile)
//                         })
//                           .then(()=> {
//                         //   console.log(this.state.data);
//                         });
// }

  render() {
// this.getTracking()
    return (

      <div >
           {/* {this.getTracking()}  */}
                      <div className="row" id="service-dashboard-row">

                    <div className="col-md-11">
                <div className="page-header">
                <h1>Prepare Order</h1>
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
                                    <button type="button" className="btn btn-default"  id="fourbuttonrow-2" onclick={this.postDeleteinformation}>   Remove</button>
                                    <button type="button" className="btn purple-background white"  id="fourbuttonrow-3">   Pay All</button>

                                    <nav aria-label="..." id="fourbuttonrow-4">
                                        <ul className="pager">
                                            <li><a href="#"> back </a></li>
                                            <li><a href="#"> next </a></li>
                                        </ul>
                                    </nav>


                                    </div>



                                    {/*Tracking-detial 1 */}






                  <div id="testnaja">

                            {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}

                            <div className="method">
                                <div className="row margin-0 list-header hidden-sm hidden-xs">
                                    <div className="col-md-1"><div className="header" id="header-prepare">#</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Order Id</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Recipient's Name</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Address</div></div>
                                    
                                     <div className="col-md-2"><div className="header" id="header-prepare">Date</div></div> 
                                    <div className="col-md-1"><div className="header" id="header-prepare">Logistic</div></div>
                                     <div className="col-md-2"><div className="header" id="header-prepare">Payment</div></div> 
                                    <div className="col-md-1"><div className="header" id="header-prepare">-</div></div>
                                </div>
                            </div>





                              {this.state.data.map((each) =>(  
                            <div className="method">
                                <div className="row margin-0">
                                    <div className="col-md-1" >
                                        <div className="cell" >

                                            <div className="prepare-checkbox">
                                            <label><input type="checkbox" value={each._id} onClick={this.handleClick} /></label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-trackingcode">
                                                 {each._id} 
                                      </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-Recipient">
                                                {each.Firstname_r}
                                      </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-address">
                                                {each.Address_r}
                                      </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-postcode">
                                                10140
                                      </div>
                                        </div>
                                    </div> */}

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-date">
                                                {each.reg_time}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-logistic">
                                                {each.Logistic}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-dropoff">
                                                <a  type="button" className="btn purple-background white" id="paid-paynow" onclick={this.postdropinformation} href="/service-booking-dropoff" >Pay now</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="isrequired">
                                                <button type="button" className="btn btn-default btn-block" id="paid-paynow" >EDIT</button>


                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                          ))}  

                        </div>





              {/*End Tracking-detial 1 */}






                </div>
                </div>



      </div>


        );
    
  }
}

export default Service_Dashboard_Paid ;

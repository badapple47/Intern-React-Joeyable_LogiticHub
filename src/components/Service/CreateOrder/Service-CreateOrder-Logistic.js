import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-CreateOrder-Logistic.css';
import axios from 'axios';


class Service_CreateOrder_Logistic extends Component {

     constructor(props) {
    super(props);
    this.state = {

    getres: {},
    token : JSON.parse(localStorage.getItem('Token')),
    selectedlogistic: {}

    }
    
       
        this.handleClick = this.handleClick.bind(this)
      this.postUserinformation = this.postUserinformation.bind(this)
      //  this.togglepls = this.togglepls.bind(this)
    //    this.getTracking = this.getTracking.bind(this)
 }



     handleClick(e) {

        this.state.selectedlogistic[e.target.name] = e.target.value
        this.setState(
            this.state

        )
    }

   postUserinformation() {
    axios({
                        
                          method:'post',
                          url:'http://localhost:3002/trackno',
                          data: {
                            userinfo: this.state.selectedlogistic
                          },
                            headers: { Authorization: this.state.token }
                        })
                          .then((response)=> {
                        //   console.log(response.data)
                          
                        //    console.log(this.state.Basicprofile[0].Firstname)
                          //  console.log(this.state.Basicprofile)
                        });
}

    render() {

        console.log(this.state.selectedlogistic)
        return (

            <div className="childofbooking">


                <div className="row bs-wizard " id="pginchildofbooking" >   
                    <h3> Logistic Service </h3>

                         <div className="container" id="booking-chooselogistic-table">

                      {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}
       
                      <div className="method">
                          <div className="row margin-0 list-header hidden-sm hidden-xs">
                              <div className="col-md-6"><div className="header">Logistic</div></div>
                              <div className="col-md-3"><div className="header">Price</div></div>
                              <div className="col-md-3"><div className="header">-</div></div>
                              
                          </div>
                        </div>
                     
                      

                      

                          
                        <div className="method">

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Thailand Post (EMS) <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      0 Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"Thailand Post(EMS)"} onClick={this.handleClick} >Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                         

                          
                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Thailand Post (Register) <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      0 Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"Thailand Post(Register)"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Kerry Express <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      0 Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"Kerry Express"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          DHL Express <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      0 Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"DHL Express"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Fedex Express <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      0 Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"Fedex Express"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                          <div className="row margin-0">

                              <div className="col-md-6">
                                  <div className="cell">
                                      <div className="">
                                          Sendit Express <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="type">
                                      0 Bath
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="">
                                      <div className="isrequired">
                                           <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" name="logistic" value={"Sendit Express"} onClick={this.handleClick}>Choose</button>
                                      </div>
                                  </div>
                              </div>

                              
                          </div>

                        
                    </div>
                    <a type="button" className="btn purple-background white "id="CLogistic-Back-button" href="/service-createorder" >Back</a>
                     <a type="button" className="btn purple-background white "id="CLogistic-Save-button" href="/service-booking" onClick={this.postUserinformation}>Save</a>
                     
                  </div>






                </div>




            </div>




        );
    }
}

export default Service_CreateOrder_Logistic ;

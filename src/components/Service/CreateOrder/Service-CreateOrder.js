import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-CreateOrder.css';
import Service_CreatOrder_Modal from './Service-CreateOrder-Modal.js';



class Service_CreateOrder extends Component {
  render() {

    return (

      <div >



                 <div className="row" id="service-dashboard-row">
                
                    <div className="col-md-11">
                
                <h1>Create Order <small>Fill information in the box</small></h1>
                

                 <button type="button" className="btn purple-background white glyphicon glyphicon-folder-open " id="service-createorder-importfilebut" aria-hidden="true">   ImportOrder</button>
               
                 
                 <div className="CreateOrder-Component1">
                 <h3 id="Service-CreateOrder-miniheader">Parcel</h3>
                 <hr/>

                 <div>
                          <form className="form-horizontal" id="register-form">
                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Weight:</label>
                                            <div className="col-sm-8">
                                                  <select className="form-control gramform">
                                                    <option>None</option>
                                                    <option>100-250 gram</option>
                                                    <option>250-500 gram</option>
                                                    <option>500-750 gram</option>
                                                    <option>750-1000 gram</option>
                                                  </select>
                                            </div>
                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Box Size:</label>
                                            <div className="col-sm-8"> 
                                                <select className="form-control gramform">
                                                  <option>None</option>
                                                  <option>BOX 1 (10X10X10 cm)</option>
                                                  <option>BOX 2 (20X20X20 cm)</option>
                                                  <option>BOX 3 (30X30X30 cm)</option>
                                                  <option>BOX 4 (40X40X40 cm)</option>
                                                  <option>BOX 5 (50X50X50 cm)</option>
                                           </select>
                                            </div>
                                          </div>

                                       
                            </form>
                  </div>
                            
                           
                  </div>
                            
                          <div className="CreateOrder-Component1">
                               <h3 id="Service-CreateOrder-miniheader">Sender</h3>
                            <hr/>

                            
                          <form className="form-horizontal" id="register-form">
                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Name:</label>
                                            <div className="col-sm-6">
                                                  <input type="Email" className="form-control" id="email" placeholder="Enter Name" name="email" />
                                            </div>
                                            <div className="col-sm-3">
                                                  <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseSeAddressmodal">Choose Address</button>
                                            </div>


                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Address:</label>
                                            <div className="col-sm-8"> 
                                                <input type="Email" className="form-control" id="createorder-address" placeholder="" name="address" />
                                            </div>
                                          </div>

                                       
                            </form>
                          

                           </div>
               


                          <div className="CreateOrder-Component3">
                               <h3 id="Service-CreateOrder-miniheader">Reciever</h3>
                            <hr/>

                            
                          <form className="form-horizontal" id="register-form">
                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Name:</label>
                                            <div className="col-sm-6">
                                                  <input type="Email" className="form-control" id="email" placeholder="Enter Name" name="email" />
                                            </div>
                                            <div className="col-sm-3">
                                                  <button type="button" className="btn purple-background white active" data-toggle="modal" data-target="#CreateOrder-ChooseReAddressmodal" >Choose Address</button>

                                                    


                                            </div>


                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Address:</label>
                                            <div className="col-sm-8"> 
                                                <input type="Email" className="form-control" id="createorder-address" placeholder="" name="address" />
                                            </div>
                                          </div>

                                       
                            </form>
                          

                           </div>


                          <div className = "container">
                            <center>
                           <button type="button" className="btn btn-default " id="CreateOrder-SavenAddmore-buttton">Save and Add more</button>
                           <button type="button" className="btn purple-background white "id="CreateOrder-Save-button" >Save</button>
                          
                           </center>
                          </div>
               
               
                </div>
                
                </div>


                                                    

      </div>


    );
  }
}

export default Service_CreateOrder;

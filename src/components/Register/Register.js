import React  from 'react';
import './Register.css';



const Register= () =>{

    return (
<div className="register">


                            <div className="row">
                            <div className="container" id="register-container">
                            <div className="page-header">
                           

                                     <div className="panel panel-default">
                                    <div className="panel-body">
                                       <h1>Register </h1>
                                       <hr/>
                                      <div className="col-md-8">
                                          
                                          <form className="form-horizontal" id="register-form">
                                          <div className="form-group">
                                            <label className="control-label col-sm-3 " for="email">Email:</label>
                                            <div className="col-sm-8">
                                              <input type="Email" className="form-control" id="email" placeholder="Enter email"/>
                                            </div>
                                          </div>
                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="pwd">Password:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Password" className="form-control" id="pwd" placeholder="Enter password"/>
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label className="control-label col-sm-3" for="confpwd">Confirm Password:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Confirm Password" className="form-control" id="pwd" placeholder="Confirm Password"/>
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label className="control-label col-sm-3" for="firstname">First Name:</label>
                                            <div className="col-sm-8"> 
                                              <input type="First Name" className="form-control" id="pwd" placeholder="First Name"/>
                                            </div>
                                          </div>
                                          
                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="lastname">Last Name:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Last Name" className="form-control" id="pwd" placeholder="Last Name"/>
                                            </div>
                                          </div>

                                          <div className="form-group">
                                            <label className="control-label col-sm-3" for="phonenum">Phone Number:</label>
                                            <div className="col-sm-8"> 
                                              <input type="Phone Number" className="form-control" id="pwd" placeholder="Phone Number"/>
                                            </div>
                                          </div>

                                          <button type="button" className="btn btn-primary" id="register-button">Register</button>


                                          
                                        </form>

                                      
                                      </div>


                                      <div className="col-md-4">

                                        
                                          
                                        <input className="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook"/>



                                        </div>






                                    </div>
                                  </div>




                          </div>
                          </div>
                          </div>






</div>

    );
  };


export default Register;

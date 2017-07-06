import React, { Component } from 'react';
import './Service-Dashboard-Profile.css';
import LogoCat from '../../../pic/cat.jpg';



const Service_Dashboard_Profile = () => {

    return (



        <div className="Service-Dashboard">


            <div className="row" id="service-dashboard-row">
                <div className="container">
                    <div className="col-md-11">


                        <div className="col-md-6">
                            <div className="panel panel-default" >
                                <div className="panel-body">
                                    <div id="dashboard-reviewpoint">
                                        <center >
                                            <div className="dashboard-profile-userpic">
                                                <img src={LogoCat} className="img-responsive" alt="" />
                                            </div>

                                            <p> Joey Pathompong </p>
                                            <p> J Point :  </p>
                                            <a type="button" className="btn purple-background white" href="/service-createorder" >Create Order</a>
                                           
                                        </center>
                                    </div>




                                </div>
                            </div>

                        </div>

                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div id="dashboard-about">
                                        <h3>About </h3>
                                        <hr />
                                        <form className="form-horizontal" id="service-dashboard-aboutform">
                                            <div className="form-group" >

                                                <p>First Name :</p>
                                                <p>Last Name :</p>
                                                <p>E-mail :</p>
                                                <p>Tel :</p>
                                                <p>Address :</p>

                                            </div>
                                        </form>
                                    </div>





                                </div>
                            </div>

                        </div>





                    </div>
                </div>
            </div>






        </div>


    );
};

export default Service_Dashboard_Profile;   

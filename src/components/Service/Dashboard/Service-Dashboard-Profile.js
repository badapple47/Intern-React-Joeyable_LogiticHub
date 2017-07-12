import React, { Component } from 'react';
import './Service-Dashboard-Profile.css';
import LogoCat from '../../../pic/cat.jpg';



class Service_Dashboard_Profile extends Component {

     constructor(props) {
    super(props);
    this.state = {


    //   isToggleOn: false,
    //   data: ["test"],
    //   datapost: {},
    //   datafake : ["datanotfound"],
    //   token : localStorage.getItem('Token'),
    //   isModalOpen : true

    }
    //     this.handleChange = this.handleChange.bind(this)
    //   this.postTracking = this.postTracking.bind(this)
    //    this.togglepls = this.togglepls.bind(this)
    //    this.getTracking = this.getTracking.bind(this)
 }

    render(){

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
};

export default Service_Dashboard_Profile;   

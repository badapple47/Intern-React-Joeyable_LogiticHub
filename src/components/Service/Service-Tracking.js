import React  from 'react';
import './Service-Tracking.css';
import LogoCat from '../../pic/cat.jpg';



const Service_Tracking = () =>{

    return (
<div className="Service_Tracking">


  {/* Just sidebar in col-md-3 */}

                    <div className="row profile">
                    <div className="col-md-3" id="tracking-sidebar">
                    <div className="profile-sidebar">

                    <div className="profile-userpic">
                    <img src={LogoCat} className="img-responsive" alt=""/>
                    </div>

                    <div className="profile-usertitle">
                    <div className="profile-usertitle-name">
                    Marcus Doe
                    </div>
                    <div className="profile-usertitle-job">
                    Developer
                    </div>
                    </div>

                    <div className="profile-userbuttons">
                    <button type="button" className="btn btn-success btn-sm">Follow</button>
                    <button type="button" className="btn btn-danger btn-sm">Message</button>
                    </div>

                    <div className="profile-usermenu">
                    <ul className="nav">
                    <li className="active">
                    <a href="#">
                    <i className="glyphicon glyphicon-home"></i>
                    Overview </a>
                    </li>
                    <li>
                    <a href="#">
                    <i className="glyphicon glyphicon-user"></i>
                    Account Settings </a>
                    </li>
                    <li>
                    <a href="#" target="_blank">
                    <i className="glyphicon glyphicon-ok"></i>
                    Tasks </a>
                    </li>
                    <li>
                    <a href="#">
                    <i className="glyphicon glyphicon-flag"></i>
                    Help </a>
                    </li>
                    </ul>
                    </div>

                    </div>
                    </div>
                    <div className="col-md-9" id="testja">


{/* Tracking col-md-9*/}
                                <div id="service-tracking-component">
                                  <h2 id="service-tracking-header">
                                  TRACKING
                                  </h2>
                                <form action="Service-Tracking" method="post">
                                <div className="input-group" id="service-tracking-search">
                                  <input type="text" className="form-control" placeholder="Input tracking number here..."/>
                                  <span className="input-group-btn">
                                    <button className="btn btn-default" type="Submit">Check</button>
                                  </span>

                              </div>
                              </form>
                              </div>

                            <div className="col-md-1"></div>
                            <div className="col-md-10" id="service-tracking-system">
{/* Tracking system col-md-10 in col-md-9 */}


                            <div className="panel panel-default">
                            <div className="panel-body">


                              <h1> Tracking Number : XXXXXXXX </h1>



{/* Wizard Progressbar ja*/}
<div className="container">
          <div className="row bs-wizard" >

              <div className="col-xs-3 bs-wizard-step complete">
                <div className="text-center bs-wizard-stepnum">Step 1</div>
                <div className="progress"><div className="progress-bar"></div></div>
                <a href="#" className="bs-wizard-dot"></a>
                <div className="bs-wizard-info text-center">Test1</div>
              </div>


              <div className="col-xs-3 bs-wizard-step active">
                <div className="text-center bs-wizard-stepnum">Step 3</div>
                <div className="progress"><div className="progress-bar"></div></div>
                <a href="#" className="bs-wizard-dot"></a>
                <div className="bs-wizard-info text-center">Test2</div>
              </div>

              <div className="col-xs-3 bs-wizard-step disabled">
                <div className="text-center bs-wizard-stepnum">Step 4</div>
                <div className="progress"><div className="progress-bar"></div></div>
                <a href="#" className="bs-wizard-dot"></a>
                <div className="bs-wizard-info text-center"> Test3</div>
              </div>
          </div>
</div>



{/* end wizard progress bar ja*/}

{/*Tracking-detial 1 */}


                    <div id="service-tracking-detail1">
                        <h3>Tracking Number :  </h3>
                        <h3>Export Date :  </h3>
                        <h3>From :  </h3>
                        <h3>Delivery Date :  </h3>
                        <h3>To :  </h3>

                    </div>






{/*End Tracking-detial 1 */}






                  </div>
                  </div>
                </div>
                    <div className="col-md-1"></div>
                    </div>
                    </div>









</div>

    );
  };


export default Service_Tracking ;

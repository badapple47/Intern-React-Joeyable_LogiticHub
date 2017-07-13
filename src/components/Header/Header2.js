import React , {Component } from 'react';
import './Header.css';
import LogoImg from '../../pic/logotop.png';
import Login from '../Login/Login';
import  { Link } from 'react-router-dom';





class Header2 extends Component {

 constructor(props) {
    super(props);
    this.state = {


      // isToggleOn: false,
      // data: ["test"],
      // datapost: {},
      // datafake : ["datanotfound"],
      token : localStorage.getItem('Token'),
      // isModalOpen : true,
      // Basicprofile : [],
      // isSignin : "success"

    }
    //  this.handleChange = this.handleChange.bind(this)
    //   this.postTracking = this.postTracking.bind(this)
    //    this.togglepls = this.togglepls.bind(this)
    //     this.checkSignin = this.checkSignin.bind(this)
    //    this.getTracking = this.getTracking.bind(this)
    this.Logout = this.Logout.bind(this)
 }


        Logout() {

          localStorage.clear();
        
       
            window.location="http://localhost:3000/";
       
       
    }


render(){


    return (

      

                                  <div className="row" >
                                     <Login />
                                    <nav className="navbar navbar-default navbar-fixed-top" id="header-background">
                                      <div className="container-fluid">

                                        <div className="col-md-4">


                                                      <img alt="Brand" src={LogoImg} id="header-logo"/>



                                        </div>

                                        <div className="col-md-8">

                                        <div id="header-top">

                                            <ul className="nav nav-tabs" >

                                     <div className="pull-right">
                <ul className="nav pull-right">
                    <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Welcome, User <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="/user/preferences"><i className="icon-cog"></i> Preferences</a></li>
                            <li><a href="/help/support"><i className="icon-envelope"></i> Contact Support</a></li>
                            <li className="divider"></li>
                            <li onClick={this.Logout}><a><i className="icon-off"> </i> Logout</a></li>
                        </ul>
                    </li>
                </ul>
              </div>
                                    </ul>

                                   


{/*modal*/}
                            
                                                    {/*<div className="container">
  <h2>Modal Example</h2>

  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>


  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
 
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>*/}






                                        </div>

                                        <div id="header-bottom">
                                        <ul className="nav nav-pills ">
                                          <li role="presentation" className="active">
                                            <a href="/home-member">HOME</a>

                                          </li>
                                          <li role="presentation">
                                            <a href="/service">SERVICE</a>
                                          </li>
                                          <li role="presentation">
                                            <a href="/promotion">PROMOTION</a>
                                          </li>
                                          <li role="presentation">
                                            <a href="#">PAYMENT</a>
                                          </li>
                                          <li role="presentation">
                                            <a href="#">ABOUT US</a>
                                          </li>
                                        </ul>
                                        </div>


                                        </div>

                                      </div>

                                    </nav>
                                    </div>

  
    );
  };
};

export default Header2;

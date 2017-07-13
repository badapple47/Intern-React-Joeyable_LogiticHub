import React  from 'react';
import './Header.css';
import LogoImg from '../../pic/logotop.png';
import Login from '../Login/Login';
import  { Link } from 'react-router-dom';



const Header = () =>{

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
                                      <li role="presentation" className="active" data-toggle="modal" data-target="#login-modal" ><a>LOGIN</a></li>
                                      <li role="presentation"><a href="/register">REGISTER</a></li>
                                      
                                      <li role="presentation"><a href="#">LANGUAGE</a></li>


                                      <form className="navbar-form " role="search" id="search">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Search"/>
                                        </div>
                                        <button type="submit" className="btn btn-default">Submit</button>
                                      </form>


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
                                            <a href="/">HOME</a>

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


export default Header;

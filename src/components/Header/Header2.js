import React  from 'react';
import './Header.css';
import LogoImg from '../../pic/logotop.png';
import Login from '../Login/Login';
import  { Link } from 'react-router-dom';



const Header2 = () =>{

    return (

      

                                  <div className="row" >
                                   


                                  

                                   
                                    <p>Hi</p>






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


export default Header2;

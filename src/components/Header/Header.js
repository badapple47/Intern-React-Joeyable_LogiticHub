import React from 'react';
import './Header.css';
import LogoImg from '../../pic/logotop.png';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';



const Header = () => {

  return (



    <div className="row" >
      <Login />
      <nav className="navbar navbar-default " id="header-background">
        <div className="container-fluid">

          <div className="col-md-3">


            <img alt="Brand" src={LogoImg} id="header-logo" />




          </div>

          <div className="col-md-9">

            <div id="header-top">

              <ul className="nav nav-pills " id="header-topcss">
                <li role="presentation" data-toggle="modal" data-target="#login-modal" ><a className="foractive">LOGIN</a></li>
                <li role="presentation" ><a className="foractive" href="/register">REGISTER</a></li>

                <li role="presentation" ><a className="foractive" href="#">LANGUAGE</a></li>


                <form className="navbar-form " role="search" >
                  <div className="form-group" >
                    <input type="text" className="form-control" id="header-search" placeholder="Tracking No." />
                  </div>
                   <button type="submit" className="btn btn-default" id="header-search-button">Search</button> 
                </form>


              </ul>
            </div>

            <hr id="header-top-bottom-hr"/>

            

            <div id="header-bottom">
              <ul className="nav nav-pills nav-justified">
                <li role="presentation">
                  <a className="foractive" href="/">HOME</a>
                </li>
                <li role="presentation">
                  <a className="foractive" href="/Service">SERVICE</a>
                </li>
                <li role="presentation">
                  <a className="foractive" href="/Promotion">PROMOTION</a>
                </li>
                <li role="presentation">
                  <a className="foractive" href="/Payment">PAYMENT</a>
                </li>
                <li role="presentation">
                  <a className="foractive" href="/AboutUs">ABOUT US</a>
                </li>
              </ul>
            </div>


          </div>

        </div>
        <hr id="horizonline" />
      </nav>
    </div>

  );
};


export default Header;

import React, { Component } from 'react';
import './Service-Sidebar.css';
import LogoCat from '../../pic/cat.jpg';



const Service_Sidebar = () => {

  return (



    <div className="profile-sidebar">

      <div className="profile-userpic">
        <img src={LogoCat} className="img-responsive" alt="" />
      </div>

      <div className="profile-usertitle">
        <div className="profile-usertitle-name">
          Joey Pathompong
                    </div>
        <div className="profile-usertitle-job">
          Developer
                    </div>
      </div>

      <div className="profile-userbuttons">
        <a type="button" className="btn btn-success btn-sm" href="/service-Createorder" >Create Order</a>
        <a type="button" className="btn btn-danger btn-sm">Notification</a>
      </div>

      <div className="profile-usermenu">
        <ul className="nav">
          <li className="active">
            <a href="/service">
              <i className="glyphicon glyphicon-home"></i>
              Dashboard </a>
          </li>
          <li>
            <a href="/service-tracking">
              <i className="glyphicon glyphicon-user"></i>
              Tracking</a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="glyphicon glyphicon-ok"></i>
              NULL </a>
          </li>
          <li>
            <a href="#">
              <i className="glyphicon glyphicon-flag"></i>
              NULL </a>
          </li>
        </ul>
      </div>


    </div>


  );
};

export default Service_Sidebar;   
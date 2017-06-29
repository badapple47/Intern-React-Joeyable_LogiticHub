import React  from 'react';
import './Login.css';
import LogoImg from '../../pic/logotop.png';



const Login= () =>{

    return (


<div className="Login">

           


                            {/*<div id="login-modal" className="modal fade" role="dialog">
                              <div className="modal-dialog">

                               
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Login</h4>
                                  </div>
                                  <div className="modal-body">
                                    <img src={LogoImg} id="login-logo"/>


                                    
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

                                          

                                           <button type="button" className="btn btn-primary" id="login-button">Login</button>


                                    </form>
                                        <hr/>
                                        <p>test</p>



                                  </div>
                            
                                </div>

                              </div>
                            </div>*/}

                <div id="login-modal" className="modal fade" role="dialog">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-4 col-md-offset-4">
                                {/*closebutton below*/}
                                 <button type="button" className="close" data-dismiss="modal">&times;</button>

                                <div className="panel panel-default">
                                    
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Login</h3>
                                    </div>
                                    <div className="panel-body">
                                        <form accept-charset="UTF-8" role="form">
                                        <fieldset>

                                            <img src={LogoImg} id="login-logo"/>
                                            
                                            <div className="form-group">
                                                <input className="form-control" placeholder="yourmail@example.com" name="email" type="text"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Password" name="password" type="password" value=""/>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input name="remember" type="checkbox" value="Remember Me"/> Remember Me
                                                </label>
                                                <a href="/register" data-toggle="modal" data-target="/register">Register</a>
                                            </div>
                                            <input className="btn btn-lg btn-success btn-block" type="submit" value="Login"/>
                                        </fieldset>
                                        </form>
                                        <hr/>
                                        <center><h4>OR</h4></center>
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


export default Login;

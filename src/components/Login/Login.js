import React , {Component } from 'react';
import './Login.css';
import LogoImg from '../../pic/logotop.png';
import axios from 'axios'


class Login extends Component {

 constructor(props) {
    super(props);
    this.state = {


      isToggleOn: false,
      data: ["test"],
      datapost: {},
      datafake : ["datanotfound"],
      token : "123111323"

    }
        this.handleChange = this.handleChange.bind(this)
      this.postTracking = this.postTracking.bind(this)
       this.togglepls = this.togglepls.bind(this)
    //    this.getTracking = this.getTracking.bind(this)
 }

  handleChange(e) {

        this.state.datapost[e.target.name] = e.target.value
        this.setState(
            this.state

        )
    }

      

      postTracking() {
        //   console.log("postnaja")
        //   console.log(this.state.datapost)
        const { refreshData } = this.props
        this.togglepls()
    //    console.log(this.state.isToggleOn)
        axios.post('http://localhost:3002/login', this.state.datapost)
            .then((res) => {
            //    console.log(res)
               this.setState({ data: res.data })
            }).then(() => {
                console.log(this.state.data)
                
          
            }).then(()=> {
                        axios({
                        
                          method:'post',
                          url:'http://localhost:3002/trackno',
                          data: {
                            firstName: 'Fred',
                            lastName: 'Flintstone'
                          },
                            headers: { Authorization: "Bearer " + this.state.token }
                        })
                          .then(function(response) {
                          console.log(response)
                        });


            })
    }

    togglepls() {

    this.setState({
      isToggleOn : !this.state.isToggleOn
    })
  }


// getTracking() {
//     axios.get('http://localhost:3002/api1')
//       .then((response) => {
//         if(response){
//    //       console.log("response")
//    //       console.log(response.data);
//           this.setState({ data: response.data })
//         }else{
//  //       console.log("not response")
//  //       console.log(response.data[0]); 
//         this.setState({ data: ["ELSE IN GETTRACKING"] })         
//         }
//       }).then(() => {
//                  console.log(this.state.data)
//       })
//   }

 render(){

     if (this.state.isToggleOn) {
    //  this.getTracking()
    } else {
      console.log('cant get Tracking ')
    }

    return (


<div className="Login">

           


                           

                <div id="login-modal" className="modal fade" role="dialog">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-4 col-md-offset-4">
                                {/*closebutton below*/}
                                 <button type="button" className="close" data-dismiss="modal">&times;</button>

                                <div className="panel panel-default">
                                    
                                    <div className="panel-heading">
                                        <h3 className="panel-title"  >Login</h3>
                                        
                                    </div>
                                    <div className="panel-body">
                                        <form accept-charset="UTF-8" role="form">
                                        <fieldset>

                                            <img src={LogoImg} id="login-logo"/>
                                            
                                            <div className="form-group">
                                                <input className="form-control" placeholder="yourmail@example.com" name="Email" type="text" value={this.state.datapost.name} onChange={this.handleChange}/>
                                            </div>

                                            <div className="form-group">
                                                <input className="form-control" placeholder="Password" name="Pass" type="password" value={this.state.datapost.name} onChange={this.handleChange}/>
                                            </div>

                                            <div className="checkbox">
                                                <label>
                                                    <input name="remember" type="checkbox" value="Remember Me"/> Remember Me
                                                </label>
                                                <a href="/register" data-toggle="modal" data-target="/register">Register</a>
                                            </div>

                                            <input className="btn btn-lg btn-success btn-block" type="submit" value="Login" onClick={this.postTracking}/>
                                            
                                        </fieldset>
                                        </form>
                                        <hr/>
                                        <center><h4>OR</h4></center>
                                        <input className="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook" />
                                       
                                         {/*<p> user token : {this.state.data} </p>*/}
                                        
                                       
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


export default Login;

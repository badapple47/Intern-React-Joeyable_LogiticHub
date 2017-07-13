import React, { Component } from 'react';
import './Service-Tracking.css';
import LogoCat from '../../../pic/cat.jpg';
import axios from 'axios'
import _ from 'lodash';

// var token = "1231313"
// axios({
 
//   method:'post',
//   url:'http://localhost:3002/trackno',
//    data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   },
//     headers: { Authorization: "Bearer " + token }
// })
//   .then(function(response) {
//   console.log(response)
// });


class Service_Tracking extends Component {




  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isLoading: true,
      isToggleOn: false,
      data:[],
      datapost: {},
      trackingresult:{trackno: "-"},
      token : "123132313"
     
    }

    
             
      this.handleChange = this.handleChange.bind(this)
      this.postTracking = this.postTracking.bind(this)
      this.togglepls = this.togglepls.bind(this);

  }

   
    handleChange(e) {

        this.state.datapost[e.target.name] = e.target.value
        // this.state.datapost[e.target.name.this.state.p] = e.target.value
        this.setState(
            this.state

        )
    }
  





    postTracking() {

      //  this.setState({ trackingresult : window.location.pathname })
      
        const { refreshData } = this.props
        this.togglepls()
    console.log(this.state.token)
        axios.post('http://localhost:3002/trackno', this.state.datapost)
            .then((res) => {
     //           console.log(res)
                  this.setState({ data: res.data })
            }).then(() => {
                // refreshData()
                  {this.bringfirstdata()}
                  console.log(this.state.token)
          
            })
    }



    

// getTracking() {
//     axios.get('http://localhost:3002/api1')
//       .then((response) => {
//         if(response){
//    //       console.log("response")
//          console.log(response.data);
//           this.setState({ data: response.data })
//         }else{
//  //       console.log("not response")
//  //       console.log(response.data[0]); 
//         this.setState({ data: response.data })         
//         }
//       }).then(() => {
//                 // console.log(this.state.data)
              
//       })
//   }

  togglepls() {

    this.setState({
      isToggleOn : !this.state.isToggleOn
    })
  }

  bringfirstdata(){
   this.setState({
     trackingresult : this.state.data[0]
     

   })
    // console.log(this.state.trackingresult.trackno)
  }






  render() {

          if (this.state.isToggleOn) {
    //  this.getTracking()
    } else {
      console.log('toggle true')
    }

    return (
      <div className="Service_Tracking">

        






        {/* Tracking col-md-9*/}

        <div id="service-tracking-component">
          <h2 id="service-tracking-header">
            TRACKING
                                  </h2>
          {/*<form action="Service-Tracking" method="post">*/}
            <div className="input-group" id="service-tracking-search">
              <input type="text" className="form-control" placeholder="Input tracking number here..." name="trackno" value={this.state.datapost.trackno} onChange={this.handleChange}/>
              
              
              <span className="input-group-btn">
                <button className="btn btn-default" type="Submit" onClick={this.postTracking} >post</button>
                {/*<button className="btn btn-default" type="Submit" onClick={this.getTracking}>get</button>*/}
              </span>

            </div>
          {/*</form>*/}
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-10" id="service-tracking-system">
          {/* Tracking system col-md-10 in col-md-9 */}


          <div className="panel panel-default">
            <div className="panel-body">


              <h1> Tracking Number :  {this.state.trackingresult.trackno}</h1>
            
              


               {/*Wizard Progressbar ja*/}
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


               {/*<div id="service-tracking-detail1">
              {this.state.data.map((each) =>(
                <div>
                <p> Tracking Number : {each.trackno}</p>
                <p> Export : {each.updated_at}</p>
                <p> Delivery : {each.message}</p>
                <p> To : {each.location}</p> 
                </div>           
              ))}
              </div>*/}

                           


                  <div className="container" id="service-tracking-table">

                      {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}
       
                      <div className="method">
                          <div className="row margin-0 list-header hidden-sm hidden-xs">
                              <div className="col-md-3"><div className="header">Date</div></div>
                              <div className="col-md-3"><div className="header">Location</div></div>
                              <div className="col-md-3"><div className="header">Status</div></div>
                              <div className="col-md-3"><div className="header">Message</div></div>
                          </div>
                        </div>
                      {this.state.data.map((each) =>(
                      

                      

                          
                        <div className="method">
                          <div className="row margin-0">

                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="propertyname">
                                          {each.checkpoint_time}  <span className="mobile-isrequired"></span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="type">
                                        {each.location}
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="isrequired">
                                           {each.message}
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="description">
                                           -
                                      </div>
                                  </div>
                              </div>
                          </div>

                        
                    </div>
                      ))}
                  </div>





              {/*End Tracking-detial 1 */}






            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>












    );

  };
};


export default Service_Tracking;

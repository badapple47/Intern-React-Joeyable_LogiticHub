import React , {Component} from 'react';                                                    
                                                    
class Service_CreateOrder_Modal extends Component{
   constructor(props) {
    super(props);
    this.state = {
    data:[],
    getres: {},
    token : JSON.parse(localStorage.getItem('Token')),
    userinformation: {}

    }

      //   this.handleChange = this.handleChange.bind(this)
      // this.postUserinformation = this.postUserinformation.bind(this)
      //  this.togglepls = this.togglepls.bind(this)
    //    this.getTracking = this.getTracking.bind(this)
 }


  render(){

    

    return (                                                   
                                                    
                                                    
                                                    
                                                    <div>
                                                    
                                                    <div id="CreateOrder-ChooseSeAddressmodal" className="modal fade" role="dialog">
                                                      <div className="modal-dialog">

                                                        
                                                        <div className="modal-content">
                                                          <div className="modal-header">
                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                            <h4 className="modal-title">Choose Sender Address</h4>
                                                          </div>
                                                          <div className="modal-body">
                                                            
                                                          </div>
                                                          <div className="modal-footer">
                                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                          </div>
                                                        </div>

                                                      </div>
                                                    </div>

                                                    <div id="CreateOrder-ChooseReAddressmodal" className="modal fade" role="dialog">
                                                      <div className="modal-dialog">

                                                        
                                                        <div className="modal-content">
                                                          <div className="modal-header">
                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                            <h4 className="modal-title">Choose Receiver Address</h4>
                                                          </div>
                                                          <div className="modal-body">
                                                            
                                                          </div>
                                                          <div className="modal-footer">
                                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                          </div>
                                                        </div>

                                                      </div>
                                                    </div>
                                                    </div>

       );
  };
};


export default Service_CreateOrder_Modal;

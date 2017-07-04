import React  from 'react';                                                    
                                                    
 const Service_CreateOrder_Modal= () =>{

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


export default Service_CreateOrder_Modal;

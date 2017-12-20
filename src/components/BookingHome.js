import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import Header from './Header';

class BookingHome extends Component { 


  render() {   
    return (
        <div>
          <Header /> 
          <br />
          <div className="container pt-5">  
          {
            this.props.msg !== undefined && this.props.msg !== "" ?
            <div className="alert alert-success" role="alert">
                <strong>{this.props.msg}</strong>
              </div>
              :''
          }         
            {
              this.props.ticket !== undefined ? 
              <div>
              
              <br/>
              <div className="form-group row">
               
                    <div className="col-7"> 
                      <div className="card">
                        <div className="card-header">
                          Train from {this.props.ticket.source} to {this.props.ticket.destination}
                        </div>
                        <div className="card-block">
                          <div className="row"> 
                            <div className="col-10"> 
                              <h4 className="card-title">Train Type : {this.props.ticket.triptype}</h4>
                              <p className="card-text">Train Information</p>
                              <p>Travelling Date : {new Date(this.props.ticket.travellingdate).toISOString()}</p>
                              <p>Booking Date : {new Date(this.props.ticket.bookingDate).toISOString()}</p>
                              <p>Price : {this.props.ticket.totalprice}</p>
                            </div>                            
                          </div>                        
                        </div>
                      </div>
                     </div>
             </div>
             </div>
              :
              ''
            }        
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  let ticket = state.csur.ticket;
  let msg = state.csur.msg;
  state.csur.msg = "";
  return {ticket, msg};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

BookingHome.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingHome));

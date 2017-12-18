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
              this.props.ticket !== undefined ? 
              <div>
              <div className="alert alert-success" role="alert">
                <strong>Booking Successfully Done. An Email has been sent to your registered email.</strong>
              </div>
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
                              <p>Travelling Date : {this.props.ticket.travellingdate}</p>
                              <p>Booking Date : {this.props.ticket.bookingDate}</p>
                              <p>Price : {this.props.ticket.totalprice}</p>
                            </div>                            
                          </div>                        
                        </div>
                      </div>
                     </div>
             </div>
             </div>
              :
              <div className="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Booking COuld not happen. Please try again.
              </div>
            }        
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  let ticket = state.csur.ticket;
  return {ticket};
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

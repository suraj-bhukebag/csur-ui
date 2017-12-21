import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import Header from './Header';
import CancelTicket from './CancelTicket';
import callApi from '../api/ApiCaller';
import {bookTicket} from './../actions';

class TicketsHome extends Component { 

  render() {   

    return (
        <div>
          <Header /> 
          <br /><br /><br />
         

          {this.props.tickets !== undefined ?
            <div className="container pt-5">   

             {
            this.props.msg !== undefined && this.props.msg !== "" ? 
               <div className="alert alert-info" role="alert">
                <strong>{this.props.msg}</strong>
              </div>
            :''
          }
      
            {
              this.props.tickets.length === 0 ? 
              <div>
              <div className="alert alert-danger" role="alert">
                <strong>You have not booked any tickets yet.</strong>
              </div>
              <br/>            
             </div>
             
              :

               this.props.tickets.map((ticket) => {
          
                    return(
                            
                          <div className="form-group row">

                            <div className="col-1"> </div>
                            <div className="col-10"> 
                              <div className="card">
                                <div className="card-header">
                                  Train from {ticket.source} to {ticket.destination}
                                </div>
                                <div className="card-block">
                                  <div className="row"> 
                                    <div className="col-10"> 
                                      <h4 className="card-title">Train Type : {ticket.tripType}</h4>
                                      <p className="card-text">Train Information</p>
                                      <p>Number of Passengers : {ticket.numberofPassenger}</p>
                                      <p>Travelling Date : {new Date(Number(ticket.travelingDate)).toISOString()} </p>
                                      
                                      <p>Price : {ticket.price}</p>
                                    </div>
                                    
                                    <div className="col-1"> 
                                       <div className="form-group row">
                                        <div className="col-2"> 
                                          <CancelTicket ticket={ticket.id} cancel={ticket.bookingStatus}/>
                                        </div>
                                      </div>
                                    </div>
                                     
                                    
                                  </div>
                                </div>
                              </div>
                             </div>
                          </div>
                          
                      );
          
                })
              
            } 
             
          </div>
            :
            ''
          }
          
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  let tickets = state.csur.tickets;
  let msg = state.csur.msg;
  state.csur.msg = "";
  return {tickets, msg};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

TicketsHome.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsHome));

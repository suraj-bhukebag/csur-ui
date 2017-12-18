import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {bookTicket} from './../actions';

class Booking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      paxs:[],
      ages:[],
      genders:[]

    };

    this.toggle = this.toggle.bind(this);
    this.handleBookTicket = this.handleBookTicket.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  navigate() {
    this.props.history.push("/booked");
  }

  handleNameChange(i, event) {
     let paxs = this.state.paxs.slice();
     paxs[i] = event.target.value;
     this.setState({paxs});
  }
  handleAgeChange(i, event) {
     let ages = this.state.ages.slice();
     ages[i] = event.target.value;
     this.setState({ages});
  }

  handleGenChange(i, event) {
     let genders = this.state.genders.slice();
     genders[i] = event.target.value;
     this.setState({genders});
  }

  handleBookTicket() {
      this.toggle();
      let reqData = {};
      let travellers = [];
      for (var i = 0; i < this.state.paxs.length; i++) {
          let t = {};
          t.name = this.state.paxs[i];
          t.gender = this.state.genders[i];
          t.age = this.state.ages[i];
          travellers.push(t);
      }
      let ticketDetails = [];
      for (var i = 0; i < this.props.train.connections.length; i++) {
          let td = {};
          td.trainId = this.props.train.connections[i].train.id;
          td.from = this.props.train.connections[i].from;
          td.to = this.props.train.connections[i].to;
          td.depTime = this.props.train.connections[i].depTime;
          td.arrivalTime = this.props.train.connections[i].arvTime;
          td.sequenceNumber = this.props.train.connections[i].sequenceNumber;
          ticketDetails.push(td);
      }

      reqData.numberofPassenger = this.props.train.paxs;
      reqData.source = this.props.train.from;
      reqData.destination = this.props.train.to;
      reqData.price = this.props.train.price;
      reqData.bookedBy = this.props.user;
      reqData.bookingDate = new Date().getTime();
      reqData.tripType = this.props.train.connections[0].train.type;
      reqData.travelingDate = this.props.train.dateOfTravel;
      reqData.ticketDetail = ticketDetails;
      reqData.traveller = travellers;
      this.props.bookTicket(reqData);


  }

  render() {

    if(this.props.ticket !== undefined) {
      this.navigate();
    }

    return (
      <div>
        <button type="button" className="btn btn-warning" onClick={this.toggle}>Book</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>Book Ticket</ModalHeader>
          <ModalBody>
            <div className="form-group row">

                    <div className="col-1"> </div>
                    <div className="col-10"> 
                      <div className="card">
                        <div className="card-header">
                          Train from {this.props.train.from} to {this.props.train.to}
                        </div>
                        <div className="card-block">
                          <div className="row"> 
                            <div className="col-10"> 
                              <h4 className="card-title">Train Type : {this.props.train.connections[0].train.type}</h4>
                              <p className="card-text">Train Information</p>
                              <p>Arr Time : {this.props.train.arvTime}</p>
                              <p>Dep Time : {this.props.train.depTime}</p>
                            </div>                            
                          </div>                        
                        </div>
                      </div>
                     </div>
             </div>

             <div className="form-group row">

                <div className="col-1"> </div>
                <div className="col-10">{Array.apply(null, Array(this.props.train.paxs)).map(function(item, i){     
                                  let g = "g"+i+1;
                                  let n = "n"+i+1;
                                  let a = "a"+i+1;                                   
                                  return (
                                    <div>
                                       <p>Passenger Information {i+1} </p>
                                       <form>
                                       <div className="form-group row">
                                          <div className="col-6">

                                          <input type="text" className="form-control"  placeholder="Name" onChange={this.handleNameChange.bind(this,i)} />
                                           
                                          </div>

                                          <div className="col-3">

                                          <input type="text" className="form-control" placeholder="Age" onChange={this.handleAgeChange.bind(this,i)} />
                                           
                                          </div>

                                          <div className="col-3">

                                          <select class="custom-select" className="form-control" onChange={this.handleGenChange.bind(this,i)} >
                                            <option value="0">Select Gender</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>                               
                                          </select>

                                         
                                           
                                          </div>
                                          
                                        </div>
                                        </form>
                                    </div>
                                  );                
                              }, this)}  </div>

             </div>

            <div className="form-group row">
              <div className="col-2"> 
                <button type="button" className="btn btn-primary" onClick={() => {this.handleBookTicket()}}>Book Ticket</button>
              </div>
            </div>
          </ModalBody>
        </Modal>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let user = state.csur.user.id;
  let ticket = state.csur.ticket;
  return {user, ticket};  
};

const mapDispatchToProps = (dispatch) => {
   return {
        bookTicket : (data) => dispatch(bookTicket(data))
    };
};

Booking.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking));

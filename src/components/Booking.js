import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {bookTicket} from './../actions';

class Booking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleBookTicket = this.handleBookTicket.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }



  handleBookTicket() {      
      this.toggle();
       
      this.props.bookTicket();

  }

  render() {

    return (
      <div>
        <button type="button" className="btn btn-warning" onClick={this.toggle}>Book</button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>Book Ticket</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="from">Class</label>
                  <input type="text" className="form-control" id="from" placeholder="Class" required 
                  onChange={(event) => {
                                    this.setState({
                                        class: event.target.value
                                    }); }}  />
                </div>
                <div className="form-group col-md-6">
                  <label for="to">Location</label>
                  <input type="text" className="form-control" id="to" placeholder="Location" onChange={(event) => {
                                    this.setState({
                                        location: event.target.value
                                    }); }}  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="dep">Min Price</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Min Price" 
                   onChange={(event) => {
                                    this.setState({
                                        minPrice: event.target.value
                                    }); }} />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Max Price</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Max Price" 
                   onChange={(event) => {
                                    this.setState({
                                        maxPrice: event.target.value
                                    }); }}  />
                </div>
              </div>
              <button type="button" className="btn btn-primary" onClick={() => {this.handleBookTicket()}}>Book Ticket</button>
              &nbsp;
               <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </form>
          </ModalBody>
        </Modal>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};  
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

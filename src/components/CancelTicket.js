import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {handleTicketCancel} from './../actions';

class CancelTicket extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      modal: false

    };

    this.toggle = this.toggle.bind(this);
    this.handleTicketCancel = this.handleTicketCancel.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  handleTicketCancel(data) {
    this.toggle();
    this.props.handleCancel(this.props.ticket, this.props.user);
  }

  render() {


    return (
      <div>
        {
          this.props.cancel === 'C' ? 
          <button type="button" className="btn btn-warning" disabled>Cancel</button>
          :
          <button type="button" className="btn btn-warning" onClick={this.toggle}>Cancel</button>    
        }
       
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         
          <ModalHeader>Delete Confirmation</ModalHeader>
              <ModalBody>
                Are you sure ?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => {this.handleTicketCancel()}} >Confirm</Button>{' '}
                <Button color="secondary" onClick={this.toggleModle}>Cancel</Button>
              </ModalFooter>
        </Modal>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let user = state.csur.user.id;
  return {user};  
};

const mapDispatchToProps = (dispatch) => {
   return {
         handleCancel : (data, user) => dispatch(handleTicketCancel(data, user))
    };
};

CancelTicket.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CancelTicket));

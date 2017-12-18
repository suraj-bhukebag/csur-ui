import React from 'react';
import {connect} from 'react-redux';
import {userSignup} from "../actions";
import { Alert, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
      "firstname":"",
      "lastname":"",
      "email":"",
      "password":""
    }
  }

  render() {

    return (     
      <div className="pt-5">
      <Form>
        <h5>New User Registration</h5><br />
        {this.props.msg ? <Alert color="success">{this.props.msg}</Alert> : ''}
      
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="Password"  onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>First Name</Label>
          <Col sm={10}>
            <Input type="text" name="fname" id="fname" placeholder="First Name" onChange={(event) => {
                                    this.setState({
                                        firstname: event.target.value
                                    });
                                }}  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Last Name</Label>
          <Col sm={10}>
            <Input type="text" name="lname" id="lname" placeholder="Last Name" onChange={(event) => {
                                    this.setState({
                                        lastname: event.target.value
                                    });
                                }} />
          </Col>
        </FormGroup>
        <button type="button" className="btn btn-primary" onClick={() => {this.props.signup(this.state)}}>Register</button>
      </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        signup : (data) => dispatch(userSignup(data))
    };
}

function mapStateToProps(state) {
  let msg = state.csur.msg;
  state.csur.msg = "";
  return {msg};
  
}

export default connect(mapStateToProps, mapDispatchToProps) (Signup);
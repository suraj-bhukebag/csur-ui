import React from 'react';
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import {userSignin} from "../actions";
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {FontIcon, RaisedButton, MuiThemeProvider} from "material-ui";
import {loginWithGoogle, loginWithFb} from "../helpers/auth";
import {firebaseAuth} from "../config/constants";

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";


class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "email":"",
      "password":""
    };

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleFbLogin = this.handleFbLogin.bind(this);

  }

  navigate() {
    this.props.history.push('/search');
  }

   componentWillMount() {

        /**
         * We have appToken relevant for our backend API
         */
/*        if (localStorage.getItem(appTokenKey)) {
            this.props.history.push("/search");
            return;
        }
*/
        firebaseAuth().onAuthStateChanged(user => {
            if (user) {
                console.log("User signed in: ", JSON.stringify(user));

                localStorage.removeItem(firebaseAuthKey);

                // here you could authenticate with you web server to get the
                // application specific token so that you do not have to
                // authenticate with firebase every time a user logs in
                localStorage.setItem(appTokenKey, user.uid);

                this.props.signin(user);

            }
        });
    }

    handleGoogleLogin() {
        loginWithGoogle()
            .catch(function (error) {
                alert(error); // or show toast
                localStorage.removeItem(firebaseAuthKey);
            });
        localStorage.setItem(firebaseAuthKey, "1");
    }

    handleFbLogin() {
        loginWithFb()
            .catch(function (error) {
                alert(error); // or show toast
                localStorage.removeItem(firebaseAuthKey);
            });
        localStorage.setItem(firebaseAuthKey, "1");
    }

  render() {

    if(this.props.isLoggedIn){
      this.navigate();
    }

    const iconStyles = {
                        color: "#ffffff"
                    };

    return (
      <div className="pt-5">
          <h5>Already Registered? Login Here</h5><br />
          <div>
          <MuiThemeProvider>
            <RaisedButton
                label="Sign in with Google"
                labelColor={"#ffffff"}
                backgroundColor="#dd4b39"
                icon={<FontIcon className="fa fa-google-plus" style={iconStyles}/>}
                onClick={this.handleGoogleLogin}
            />   
           
            </MuiThemeProvider>.

        </div>
        <br />
       <div>
          <MuiThemeProvider>
             <RaisedButton
                label="Sign in with Facebook"
                labelColor={"#ffffff"}
                backgroundColor="#3b5998"
                icon={<FontIcon className="fa fa-google-plus" style={iconStyles}/>}
                onClick={this.handleFbLogin}
                /> 
           
            </MuiThemeProvider>.

        </div>

        
        <br />
          {this.props.msg ? <Alert color="success">{this.props.msg}</Alert> : ''}
            <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="semail" id="semail" placeholder="Email" onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="spassword" id="spassword" placeholder="Password"  onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }} />
                </FormGroup>
                <button className="btn btn-primary" onClick={() => {this.props.signin(this.state)}}>Signin</button>
            </Form>
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        signin : (data) => dispatch(userSignin(data))
    };
}

function mapStateToProps(state) {
  if(state.csur != null) {
      const isLoggedIn = state.csur.isLoggedIn;
      const msg = state.csur.signinmsg;
      state.csur.signinmsg = "";
      return {isLoggedIn, msg};
  }
    
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Signin));
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {userSignout, userTickets} from "../actions";
const appTokenKey = "appToken";

class Header extends Component { 
  render() {   
    var linkStyle = {'text-decoration': 'none', 'color': 'grey'};
    return (
        <nav className="navbar navbar-toggleable-md fixed-top navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">CSUR Booking Portal</Link>
          <div className="collapse navbar-collapse marginTop" id="navbarText">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <Link className="nav-link" to="search">Search</Link>
              </li>
             
            </ul>
            
              {this.props.isLoggedIn !== undefined && this.props.isLoggedIn === true ? 
                <span className="navbar-text">
                  <Link  style={linkStyle} to="tickets" onClick={() => {this.props.userTickets(this.props.userId)}}>My Tickets</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link style={linkStyle} to="logout" onClick={() => {this.props.userSignout()}} >Logout</Link>
                </span>
                :
                <span className="navbar-text">
                  <Link style={linkStyle} to="users">Register/Login</Link>
                </span>
                
              }
            
          </div>
        </nav>
    );
  }
}

const mapStateToProps = (state) => {
  let isLoggedIn = state.csur.isLoggedIn;
  let userId = "";
  if(isLoggedIn) {
    userId = state.csur.user.id;
  }
  
  return {isLoggedIn, userId};
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignout : (data) => dispatch(userSignout(data)),
    userTickets : (data) => dispatch(userTickets(data)),
  };
};

Header.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));

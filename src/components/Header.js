import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';

class Header extends Component { 
  render() {   
    return (
        <nav className="navbar navbar-toggleable-md fixed-top navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">CSUR Booking Portal</a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="search">Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="search">Register/Login</Link>
              </li>
            </ul>
            <span className="navbar-text">
              Logout
            </span>
          </div>
        </nav>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Header.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));

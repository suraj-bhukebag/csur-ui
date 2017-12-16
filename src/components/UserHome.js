import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import Search from './Search';
import SearchResults from './SearchResults';
import Header from './Header';
import Signin from './Signin';
import Register from './Register';

class UserHome extends Component { 


  render() {   
    return (
        <div>
          <Header /> 
          <br />
          <div className="container pt-5">           
            <div className="row">   
              <div className="col-5"> <Register /> </div>    
              <div className="col-2">  </div>
              <div className="col-4"> <Signin /> </div>
              
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  let searchResult = state.csur.trains;
  return {searchResult};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

UserHome.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHome));

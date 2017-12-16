import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import Header from'./Header';

class Home extends Component { 
  render() {   
    return (
        <div>              
         <Header />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';


class Admin extends Component { 
  render() {   
    return (
        <div>              
            <div className="container-fluid">
              <div className="row" >
                {this.props.params.service === undefined ? <div>Undefine</div> : ''}
                {this.props.params.service === 'search' ? <div>Search</div> : ''}
              </div>
            </div>  		  	
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

Admin.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin));

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './AdminHeader';
import LeftNavigation from './LeftNavigation';


// Import Style
import styles from './Admin.css';


class AdminHome extends Component { 
  render() {   
    return (
        <div>
  		    <Header />
          <div className={styles['headerMargin']}>          
            
              <div className="container-fluid">
                <div className="row" >
                  <LeftNavigation />
                  
                  <div className="col-md-9 pt-5"> <br/><br/><br/>Ssssss </div>
                </div>
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

AdminHome.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHome);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import Booking from './Booking';

class SearchResults extends Component { 


  render() {   
    return (
        <div className="container pt-1">  

        {this.props.trains !== undefined ? 

          this.props.trains.map((train) => {
          
            return(
                  <div className="form-group row">
                    <div className="col-1"> </div>
                    <div className="col-10"> 
                      <div className="card">
                        <div className="card-header">
                          Train A to B
                        </div>
                        <div className="card-block">
                          <div className="row"> 
                            <div className="col-10"> 
                              <h4 className="card-title">Express Train</h4>
                              <p className="card-text">Train Information</p>
                            </div>
                            <div className="col-1"> 
                               <Booking />
                            </div>
                          </div>
                        </div>
                      </div>
                     </div>
                  </div>
              );
          
          })
        

         : ''} 
        
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

SearchResults.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults));

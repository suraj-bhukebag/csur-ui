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
        {this.props.msg !== undefined ? 
         <div className="form-group row">
              <div className="col-2"> </div>
              <div className="col-8"><div className="alert alert-warning" role="alert">{this.props.msg}</div> </div>
              
          </div>
        :''
        
        }
        {this.props.trains !== undefined ? 
               
          this.props.trains.map((train) => {
          
            return(
                    
                  <div className="form-group row">

                    <div className="col-1"> </div>
                    <div className="col-10"> 
                      <div className="card">
                        <div className="card-header">
                          Train from {train.from} to {train.to}
                        </div>
                        <div className="card-block">
                          <div className="row"> 
                            <div className="col-10"> 
                              <h4 className="card-title">Train Type : {train.connections[0].train.type}</h4>
                              <p className="card-text">Train Information</p>
                              
                              <p>Dep Time : {train.depTime}</p>
                            </div>
                            {this.props.user !== undefined ?
                            <div className="col-1"> 
                               <Booking train={train}/>
                            </div>
                             :
                              ''}
                            
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
  let user = state.csur.user;
  let msg = state.csur.searchMsg;
  state.csur.searchMsg = "";
  return {user, msg};
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

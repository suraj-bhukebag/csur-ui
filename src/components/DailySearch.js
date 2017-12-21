import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './AdminHeader';
import LeftNavigation from './LeftNavigation';
import GenericBarGraph from './GenericBarGraph';
import {handleDailySearch} from './../actions';

// Import Style
import styles from './Admin.css';


class DailySearch extends Component { 


   constructor(props) {
    super(props);
    this.state = {
     "from":""

    };
  }

  render() {   
    return (
         <div>
          <Header />
          <div className={styles['headerMargin']}>          
            
              <div className="container-fluid">
                <div className="row" >
                  <LeftNavigation />
                  
                  <div className="col-md-9 pt-5"> <br/><br/>Daily Search Reports: Select Date <br/> <br/> 
                       <div className="form-group row">
                     
                         <label for="example-search-input" className="col-1 col-form-label">From</label>
                          <div className="col-3">
                               <input className="form-control" type="date" id="example-date-input" onChange={(event) => {
                                                  this.setState({
                                                      date: event.target.value
                                                  }); }} />
                          </div>
                          
                          
                          <div className="col-3">
                              <div className="col-2"> 
                                <button type="button" class="btn btn-primary" onClick={() => {this.props.handleDailySearch(this.state)}}>Generate Report</button>
                              </div>
                          </div>
                        </div>
                      {this.props.sc !== undefined ?
                         <div className="row">

                        <div className="col-6">
                          <h5>Search Counts : 2 </h5>
                        </div>

                        </div>
                      : ''}
                        <div>
                         <br /><br /><br />
                        <div className="row">
                        {this.props.report1 !== undefined && this.props.report1.length > 0 ? 
                            <div className="col-6">
                         
                            <h5>Daily Search Count Based on Connections</h5>  
                            <GenericBarGraph title="Daily Search Chart" field="total" dataKey="typeOfSearch" dataVal="connectionPercentage" fieldName="Car Revenue" xLabel="Dates" yLabel="No of Search Requests" data={this.props.report1} />   

                            </div>  
                         :''}   
                         {this.props.report2 !== undefined && this.props.report2.length > 0 ?                  
                        <div className="col-6">
                        <h5>Server Latency for Search Types</h5>  
                        <GenericBarGraph title="Daily Search Chart" field="total" dataKey="typeOfSearch" dataVal="latency" fieldName="Car Revenue" xLabel="Dates" yLabel="No of Search Requests" data={this.props.report2} />   
                          
                        </div>
                        :''}
                      </div>
                      </div>
                        
                   

                  </div>
   
                    

                </div>
              </div>
          
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 let report1 = state.csur.connectionCount;
 let report2 = state.csur.latency;
 let sc = state.csur.searchCounts;


  return {report1, report2, sc};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDailySearch : (data) => dispatch(handleDailySearch(data))
  };
};

DailySearch.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailySearch);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './AdminHeader';
import LeftNavigation from './LeftNavigation';
import {dailyReservation} from './../actions';
import GenericBarGraph from './GenericBarGraph';


// Import Style
import styles from './Admin.css';


class DailyReservation extends Component { 

   constructor(props) {
    super(props);
    this.state = {
     "from":"",
     "to":""

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
                  
                  <div className="col-md-9 pt-5"> <br/><br/><h5>DailyReservation : Select Data Range </h5><br/> <br/> 
                       <div className="form-group row">
                     
                         <label for="example-search-input" className="col-1 col-form-label">From</label>
                          <div className="col-3">
                               <input className="form-control" type="date" id="example-date-input" onChange={(event) => {
                                                  this.setState({
                                                      from: event.target.value
                                                  }); }} />
                          </div>
                           <label for="example-text-input" className="col-1 col-form-label">To</label>
                          <div className="col-3">
                               <input className="form-control" type="date" id="example-date-input" onChange={(event) => {
                                                  this.setState({
                                                      to: event.target.value
                                                  }); }} />
                          </div>
                          
                          <div className="col-3">
                              <div className="col-2"> 
                                <button type="button" class="btn btn-primary" onClick={() => {this.props.handleDailyReservation(this.state)}}>Generate Report</button>
                              </div>
                          </div>
                        </div>
                        {this.props.report !== undefined && this.props.report.length > 0 ? 
                        <div className="col-5">                 
                        <br/><br/>
                        <GenericBarGraph title="Daily Reservation Chart" field="total" dataKey="date" dataVal="reservationRate" fieldName="Car Revenue" xLabel="Dates" yLabel="Reservation Rate in %" data={this.props.report} />   </div>
                        
                    :''}

                  </div>
   
                    

                </div>
              </div>
          
  		  	
		    </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let report = state.csur.report2;
  return {report};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDailyReservation : (data) => dispatch(dailyReservation(data))
  };
};

DailyReservation.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyReservation);

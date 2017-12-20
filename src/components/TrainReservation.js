import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './AdminHeader';
import LeftNavigation from './LeftNavigation';


// Import Style
import styles from './Admin.css';


class TrainReservation extends Component { 
  render() {   
    return (
        <div>
  		    <Header />
          <div className={styles['headerMargin']}>          
            
              <div className="container-fluid">
                <div className="row" >
                  <LeftNavigation />
                  
                  <div className="col-md-9 pt-5"> <br/><br/><h5>Train Reservation Rate Report</h5><br/>
                      <table className="table table-striped">
                        <thead className="thead">
                          <tr>
                            <th>#</th>
                            <th>Train Number</th>
                            <th>Date</th>
                            <th>Reservation Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          

                                  {this.props.report !== undefined ? 
                                       
                                  this.props.report.map((report, i) => {
                                  
                                    return(
                                            
                                          <tr>
                                            <th scope="row">{i+1}</th>
                                            <td>{report.train}</td>
                                            <td>{report.date}</td>
                                            <td>{report.reservationRate}</td>
                                          </tr>
                                          
                                      );
                                  
                                  })
                                

                                 : ''} 
                         
                        </tbody>
                      </table>


                   </div>
                </div>
              </div>
          
  		  	
		    </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let report = state.csur.report1;
 
  return {report};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

TrainReservation.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainReservation);

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {trainReservationRate} from "../actions";

class LeftNavigation extends Component {

	render() {
var linkStyle = {'text-decoration': 'none', 'color': 'grey'};
		return( 
        <div className="col-sm-3 col-md-2">     
        <br/><br/><br/>
        <nav className="hidden-xs-down bg-faded sidebar" id='whiteBackground'>
          <ul className="nav nav-pills flex-column">
               <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <Link style={linkStyle} to="/adminTrainReservation" onClick={() => {this.props.trainReservationRate()}}>&nbsp;&nbsp;&nbsp;Train Reservation Rate</Link>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <Link style={linkStyle} to="/adminDailyReservation">&nbsp;&nbsp;&nbsp;Daily Reservation</Link>
            </li>
            <li className="nav-item">
              &nbsp; 
            </li>
            <li className="nav-item">
              <Link style={linkStyle} to="/adminDailySearch">&nbsp;&nbsp;&nbsp;Daliy Search</Link>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              <Link style={linkStyle} to="/adminReset">&nbsp;&nbsp;&nbsp;Reset System</Link>
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            <li className="nav-item">
              &nbsp;
            </li>
            
          </ul>
        </nav> 
        </div>     
			)
	}

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { 
  trainReservationRate : (data) => dispatch(trainReservationRate()) };
};

LeftNavigation.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavigation);


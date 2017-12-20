import React, {Component} from 'react';
import {withRouter, Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import SearchHome from './SearchHome';
import BookingHome from './BookingHome';
import UserHome from './UserHome';
import TicketsHome from './TicketsHome';
import AdminHome from './AdminHome';
import Capacity from './Capacity';
import Reset from './Reset';
import DailySearch from './DailySearch';
import DailyReservation from './DailyReservation';
import TrainReservation from './TrainReservation';

class Root extends Component {

	render() {

		return(
			

            <BrowserRouter>

            <Switch>

			    <Route exact path='/' component={SearchHome} />	
			    <Route exact path='/logout' component={SearchHome} />			    	    
			    <Route path='/search' component={SearchHome} />			 
			    <Route path='/users' component={UserHome} />
    			<Route path='/booked' component={BookingHome} />
    			<Route path='/tickets' component={TicketsHome} />
    			<Route path='/admin' component={AdminHome} />
    			<Route path='/adminCapacity' component={Capacity} />
    			<Route path='/adminReset' component={Reset} />
    			<Route path='/adminDailySearch' component={DailySearch} />
    			<Route path='/adminDailyReservation' component={DailyReservation} />
    			<Route path='/adminTrainReservation' component={TrainReservation} />
			</Switch>
			  
			</BrowserRouter>
		       
		)
	}

}

export default Root;
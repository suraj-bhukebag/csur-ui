import React, {Component} from 'react';
import {withRouter, Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import SearchHome from './SearchHome';
import UserHome from './UserHome';

class Root extends Component {

	render() {

		return(
			

            <BrowserRouter>

            <Switch>
			    <Route exact path='/' component={SearchHome} />	
			    <Route exact path='/logout' component={SearchHome} />			    	    
			    <Route path='/search' component={SearchHome} />
			    <Route path='/users' component={UserHome} />
			</Switch>
			  
			</BrowserRouter>
		       
		)
	}

}

export default Root;
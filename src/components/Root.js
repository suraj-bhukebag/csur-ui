import React, {Component} from 'react';
import {withRouter, Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import SearchHome from './SearchHome';

class Root extends Component {

	render() {

		return(
			

            <BrowserRouter>

            <Switch>
			    <Route exact path='/' component={Home} />
			    	    
			    <Route path='/search' component={SearchHome} />
			</Switch>
			  
			</BrowserRouter>
		       
		)
	}

}

export default Root;
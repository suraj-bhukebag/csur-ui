import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AdminHeader extends Component {

	render() {

		return( 
             
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <Link className="navbar-brand" to="admin"><h5 className='headerBrand'>CSUR Portal Admin</h5></Link>
            <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
          </nav>          
			)
	}

}

export default AdminHeader;
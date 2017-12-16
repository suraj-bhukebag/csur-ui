import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import Search from './Search';
import SearchResults from './SearchResults';
import Header from './Header';

class SearchHome extends Component { 


  render() {   
    return (
        <div>
          <Header /> 
          <br />
          <div className="container pt-5">           
            <Search />
            <SearchResults trains={this.props.searchResult} />         
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  let searchResult = state.csur.trains;
  return {searchResult};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

SearchHome.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchHome));

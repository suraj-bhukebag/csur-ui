import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {searchTrains} from './../actions';

class Search extends Component { 

   constructor(props) {
    super(props);
    this.state = {
     "from":"",
     "to":"",
     "depTime":"06:00:00",
     "isExact":"",
     "paxs":"1",
     "conn":"0",
     "depDate":"",
     "trainType":"A"

    };
    this.handleSearchTrain = this.handleSearchTrain.bind(this);
  }

  handleSearchTrain() {
    
    this.props.searchTrains(this.state);

  }
  render() {   
    return (
        <div className="container pt-1"> 
          <div className="form-group row">
            <div className="col-2"> </div>
            <div className="col-3"> <h5>Search For Trains Here </h5> </div>
          </div>
        
          <div className="form-group row">
            <div className="col-2"> </div>
            <label for="example-text-input" className="col-1 col-form-label">From</label>
            <div className="col-3">
             <select class="custom-select" onChange={(event) => {
                                    this.setState({
                                        from: event.target.value
                                    }); }} >
                  <option selected>Choose From Station</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                  <option value="4">D</option>
                  <option value="5">E</option>
                  <option value="6">F</option>
                  <option value="7">G</option>
                  <option value="8">H</option>
                  <option value="9">I</option>
                  <option value="10">J</option>
                  <option value="11">K</option>
                  <option value="12">L</option>
                  <option value="13">M</option>
                  <option value="14">N</option>
                  <option value="15">O</option>
                  <option value="16">P</option>
                  <option value="17">Q</option>
                  <option value="18">R</option>
                  <option value="19">S</option>
                  <option value="20">T</option>
                  <option value="21">U</option>
                  <option value="22">V</option>
                  <option value="23">W</option>
                  <option value="24">X</option>
                  <option value="25">Y</option>
                  <option value="26">Z</option>

                </select>
             
            </div>
            <label for="example-search-input" className="col-1 col-form-label">To</label>
            <div className="col-3">
             <select class="custom-select" onChange={(event) => {
                                    this.setState({
                                        to: event.target.value
                                    }); }} >
                  <option selected>Choose To Station</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                  <option value="4">D</option>
                  <option value="5">E</option>
                  <option value="6">F</option>
                  <option value="7">G</option>
                  <option value="8">H</option>
                  <option value="9">I</option>
                  <option value="10">J</option>
                  <option value="11">K</option>
                  <option value="12">L</option>
                  <option value="13">M</option>
                  <option value="14">N</option>
                  <option value="15">O</option>
                  <option value="16">P</option>
                  <option value="17">Q</option>
                  <option value="18">R</option>
                  <option value="19">S</option>
                  <option value="20">T</option>
                  <option value="21">U</option>
                  <option value="22">V</option>
                  <option value="23">W</option>
                  <option value="24">X</option>
                  <option value="25">Y</option>
                  <option value="26">Z</option>
                </select>
  
            </div>
            <div className="col-2"> </div>
          </div>
          
           <div className="form-group row">
            <div className="col-2"> </div>
            <label for="example-text-input" className="col-1 col-form-label">Dep Time</label>
            <div className="col-3">
              <input type="time" className="form-control" defaultValue="13:45:00" id="inputPassword4" placeholder="Departure Time" 
                   onChange={(event) => {
                                    this.setState({
                                        depTime: event.target.value
                                    }); }}  />
 
            </div>
            <label for="example-search-input" className="col-1 col-form-label">Exact Time?</label>
            <div className="col-3">
              <label class="form-check-label">
                <input type="checkbox" className="form-check-input" onChange={(event) => {
                                    this.setState({
                                        isExact: event.target.value
                                    }); }}  /> &nbsp;
                Is Exact
              </label>
            </div>
            
            <div className="col-2"> </div>
          </div>

           <div className="form-group row">
            <div className="col-2"> </div>
           <label for="example-search-input" className="col-1 col-form-label">Dep Date</label>
            <div className="col-3">
                 <input className="form-control" type="date" id="example-date-input" onChange={(event) => {
                                    this.setState({
                                        depDate: event.target.value
                                    }); }} />
            </div>
             <label for="example-text-input" className="col-1 col-form-label">Train Type</label>
            <div className="col-3">
              <select class="custom-select" onChange={(event) => {
                                    this.setState({
                                        trainType: event.target.value
                                    }); }} >
                  <option value="R">Any</option>
                  <option value="R">Regular</option>
                  <option value="E">Express</option>
                </select>
            </div>
            <div className="col-2"> </div>
          </div>

          <div className="form-group row">
            <div className="col-2"> </div>
            <label for="example-text-input" className="col-1 col-form-label">Passengers</label>
            <div className="col-3">
              <select class="custom-select" onChange={(event) => {
                                    this.setState({
                                        paxs: event.target.value
                                    }); }} >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
            </div>
            <label for="example-search-input" className="col-1 col-form-label">Connections</label>
            <div className="col-3">
              <select class="custom-select" onChange={(event) => {
                                    this.setState({
                                        conn: event.target.value
                                    }); }} >
                  <option selected value="-1">Any</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              
            </div>
            <div className="col-2"> </div>
          </div>
          <br />
          <div className="form-group row">
              <div className="col-5"> </div>
              <div className="col-2"> 
                <button type="button" class="btn btn-primary" onClick={() => {this.handleSearchTrain()}}>Search</button>
              </div>
              
          </div>
          
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
     searchTrains : (data) => dispatch(searchTrains(data))
  };
};

Search.propTypes = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));

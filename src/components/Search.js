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
     "depTime":"",
     "isExact":"",
     "paxs":"",
     "conn":""

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
              <input type="text" list="stations" className="form-control" id="inputPassword4" placeholder="From" 
                   onChange={(event) => {
                                    this.setState({
                                        from: event.target.value
                                    }); }}  />
               <datalist id="stations">
                        {
                          this.props.stations.map((station)=>{
                            return (<div><option value={station}></option></div>)
                          })
                        }
              </datalist>  
            </div>
            <label for="example-search-input" className="col-1 col-form-label">To</label>
            <div className="col-3">
               <input type="text" list="stations" className="form-control" id="inputPassword4" placeholder="To" 
                   onChange={(event) => {
                                    this.setState({
                                        to: event.target.value
                                    }); }}  />
               <datalist id="stations">
                        {
                          this.props.stations.map((station)=>{
                            return (<div><option value={station}></option></div>)
                          })
                        }
              </datalist>  
            </div>
            <div className="col-2"> </div>
          </div>
          
           <div className="form-group row">
            <div className="col-2"> </div>
            <label for="example-text-input" className="col-1 col-form-label">Dep Time</label>
            <div className="col-3">
              <input type="text" className="form-control" id="inputPassword4" placeholder="Departure Time" 
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
            <label for="example-text-input" className="col-1 col-form-label">Passengers</label>
            <div className="col-3">
              <select class="custom-select" onChange={(event) => {
                                    this.setState({
                                        paxs: event.target.value
                                    }); }} >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
                </select>
            </div>
            <label for="example-search-input" className="col-1 col-form-label">Connections</label>
            <div className="col-3">
              <select class="custom-select" onChange={(event) => {
                                    this.setState({
                                        conn: event.target.value
                                    }); }} >
                  <option selected>Any</option>
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
  let stations = ['A','B','C','D','E','F','G'];
  let paxs = [1,2,3,4,5];
  let con = ["Any","1","2"];
  return {stations, paxs, con};
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

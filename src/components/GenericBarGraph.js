import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList } from 'recharts';


const margin = {top: 20, right: 20, bottom: 30, left: 40};

class GenericBarGraph extends Component {
  render() {
         
          
  var width = 600,
    height = 350,
    title = this.props.title,
    chartSeries = [
      {
        field: this.props.field,
        name: this.props.fieldName,
        color: '#96bbf7'
      }
    ],
    x = function(d) {
      return d._id;
    },
    xScale = 'ordinal',
    xLabel = this.props.xLabel,
    yLabel = this.props.yLabel;

    console.log("X ", xLabel)
    console.log("Y ", yLabel)

    return (


<BarChart width={400} height={250} data={this.props.data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey={this.props.dataKey} />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey={this.props.dataVal} fill="#8884d8" />
</BarChart>



  
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

GenericBarGraph.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericBarGraph);

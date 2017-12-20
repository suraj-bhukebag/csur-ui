import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector,
Label, LabelList } from 'recharts';


const margin = {top: 20, right: 20, bottom: 30, left: 40};

class GenericPieChart extends Component {
  render() {
         
          let data = [{"name":"a", "value":20}, {"name":"b", "value":20}, {"name":"c", "value":40}];
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


<PieChart width={730} height={350}>
  <Pie data={this.props.data} dataKey="noOfSearchRequests" nameKey="date" cx="25%" cy="50%" outerRadius={100} fill="#8884d8" />
  <Tooltip />
</PieChart>



  
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

GenericPieChart.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenericPieChart);

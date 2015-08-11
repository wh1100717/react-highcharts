var React = require('react');
var HighCharts = require('react-highcharts');

var HighChartsComponent = React.createClass({

  componentWillMount: function(){
    this.setTheme();
  },

  getChart: function(){

    if(this.refs.chart != undefined){
      return this.refs.chart.getChart();
    } else {
      throw new Error('Chart is only available when chart didMount');
    }
  },

  /**
   * This method sets theme to Highcharts
   */
  setTheme: function () {
  },

  render: function () {
    return (
      <HighCharts
        config={this.props.data}
        ref={"chart"}
        style={{width: '100%', height: '100%', position: 'absolute'}}
        />
    );
  }
});

module.exports = HighChartsComponent;
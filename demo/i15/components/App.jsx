// App.js
var React = require('react');
var Highcharts = require('react-highcharts');

var config = {
  /* HighchartsConfig */
};
var App = React.createClass({
  getInitialState: function() {
    return {
      config: {}
    };
  },
  componentDidMount: function() {
    var config = {

      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]

    };
    this.setState({
      'config':config
    });
  },
  render: function() {
    return (
      <div id="chart">
        <Highcharts config = {this.state.config} />
      </div>
    );
  }
});

module.exports = App;
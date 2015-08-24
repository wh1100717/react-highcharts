global.HighchartsAdapter = require('exports?HighchartsAdapter!Highcharts/js/adapters/standalone-framework.src');
var Highchart = require('exports?Highcharts!Highcharts/js/highstock.src');
var React = require('react');
var update = require('react/addons').addons.update;
module.exports = React.createClass({
  displayName: 'Highchart',

  initChart: function() {
    if (!this.props.config) {
      throw new Error('Config has to be specified, for the Highchart component');
    }
    var config = this.props.config;
    var node = this.refs.chart.getDOMNode();
    if (!config.chart) {
      config = update(config, {chart: {$set: {}}});
    }
    config = update(config, {chart: {renderTo: {$set: node}}});
    if (config.stockChart) {
      this.chart = new Highchart.StockChart(config);
    } else {
      this.chart = new Highchart.Chart(config);
    }
  },

  //目前的componentDidUpdate函数有些暴力，直接重新 new Highchart 需要实现一种低成本，不需要重新刷新的更新方式
  updateSeries: function() {
    var config = this.props.config;
    var series = config.series
    for(var index = 0; index < series; index++) {
      var serie = series[index]
    }
  },


  refreshChart: function() {
    if (!this.props.config) {
      throw new Error('Config has to be specified, for the Highchart component');
    }
    var config = this.props.config;
    var chart = this.getChart();



  },

  getChart: function() {
    if (!this.chart) {
        throw new Error('getChart() should not be called before the component is mounted');
    }
    return this.chart;
  },

  componentDidMount: function () {
    this.initChart();
  },
  componentDidUpdate: function () {
    // @todo 待完成
    // this.renderChart();
  },
  render: function () {
    return <div className = "chart" ref = "chart" />
  }
});

module.exports.Highchart = Highchart;
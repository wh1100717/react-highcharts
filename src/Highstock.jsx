global.HighchartsAdapter = require('exports?HighchartsAdapter!Highcharts/js/adapters/standalone-framework.src');
var Highchart = require('exports?Highcharts!Highcharts/js/highstock.src');
var React = require('react');
var update = require('react/addons').addons.update;
module.exports = React.createClass({
    displayName: 'Highchart',

    initChart: function() {
        var config = this.props.config
        if (!config || !config.series) {
            return
        }
        var node = this.refs.chart.getDOMNode();
        if (!config.chart) {
            config.chart = {}
        }
        config.chart.renderTo = node
        this.config = update(config, {
            $merge: {}
        })
        if (config.stockChart) {
            this.chart = new Highchart.StockChart(config);
        } else {
            this.chart = new Highchart.Chart(config);
        }
    },

    // @todo
    // 目前的componentDidUpdate函数有些暴力，直接重新 new Highchart 需要实现一种低成本，不需要重新刷新的更新方式
    refreshChart: function() {
        var config = this.props.config
        if (!config || !config.series) {
            return
        }
        if (!this.chart) {
            return this.initChart()
        } 

        //更新Series
        this.updateSeries()

        //重新更新config
        this.config = update(config, {
            $merge: {}
        })
    },

    updateSeries: function() {
        var newSeries = this.props.config.series
        var series = this.config.series
        var chart = this.getChart()
        //和newSeries比较，同步删除不需要的serie
        var removeList = []
        for (var index = series.length - 1; index >= 0; index--) {
            var serie = series[index]
            var remove_flag = true
            for (var n_index = newSeries.length - 1; n_index >= 0; n_index--) {
                var n_serie = newSeries[n_index]
                if (n_serie.id === serie.id) {
                    remove_flag = false
                    break
                }
            }
            if (remove_flag) {
                removeList.push(serie.id)
            }
        }
        for (var s = 0; s < removeList.length; s++){
            chart.get(removeList[s]).remove(true)
        }
        //循环遍历，寻找需要更新/添加的serie
        for (var n_index = newSeries.length - 1; n_index >= 0; n_index--) {
            var n_serie = newSeries[n_index]
            var add_flag = true
            for (var index = series.length - 1; index >= 0; index--) {
                var serie = series[index]
                if (n_serie.id === serie.id) {
                    add_flag = false
                    chart.get(n_serie.id).update(n_serie)
                }
            }
            if (add_flag) {
                chart.addSeries(n_serie)
            }
        }

    },

    getChart: function() {
        if (!this.chart) {
            throw new Error('getChart() should not be called before the component is mounted');
        }
        return this.chart;
    },

    componentDidMount: function() {
        this.initChart();
    },
    componentDidUpdate: function() {
        this.refreshChart()
    },
    render: function() {
        return <div className = "chart" ref = "chart" />
    }
});

module.exports.Highchart = Highchart;
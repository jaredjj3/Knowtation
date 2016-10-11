import React from 'react';
import daysArray from '../../util/days_array';

class Progress extends React.Component {
  constructor(props) {
    super(props);

    this._drawChart = this._drawChart.bind(this);
  }

  componentDidMount() {
    this._loadChart();
  }

  componentDidUpdate(prevProps) {
    const prevPageUserId = prevProps.pageUser.id;
    const currPageUserId = this.props.pageUser.id;

    if (prevPageUserId && currPageUserId &&
        prevPageUserId !== currPageUserId) {
      this._drawChart();
    }
  }

  render() {
    const { pageUser } = this.props;

    let numLoops = 0;
    if (pageUser.username !== null) {
      numLoops = pageUser.givenLoops.totalLoops;
    }

    return(
      <div className="progress-container">
        <div id="chart-container" />
      </div>
    );
  }

  // private

  _loadChart() {
    const google = window.google;

    google.charts.load('current', { packages:['corechart']});
    google.charts.setOnLoadCallback(this._drawChart);
  }

  _drawChart() {
    const google = window.google;
    const { pageUser } = this.props;
    const { mappedLoops } = pageUser.givenLoops;

    // gives an array of only the number of loops where the
    const numLoopsArray = mappedLoops.map( array => array[1]);
    const minLoops = Math.min(...numLoopsArray);
    const maxLoops = Math.max(...numLoopsArray);

    const arrayData = [['days ago', 'loops']].concat(mappedLoops);
    const data = google.visualization.arrayToDataTable(arrayData);

    // $main-blue: #0061ff;
    const options = {
      curveType: 'function',
      fontName: 'Open Sans',
      fontSize: 12,
      width: 300,
      height: 100,
      legend: 'none',
      tooltip: {
        trigger: 'none'
      },
      vAxis: {
        title: 'loops',
        ticks: [ minLoops, maxLoops ],
        baselineColor: 'black',
        format: '#',
        gridlines: { color: 'transparent' }
      },
      hAxis: {
        direction: -1, // reverse axis
        format: '#',
        baselineColor: '#eee',
        gridlines: { color: '#eee' },
        ticks: daysArray
      },
      colors: ['#0061ff']
    };

    this.chart = this.chart || new google.visualization.LineChart(
      document.getElementById('chart-container')
    );

    this.chart.draw(data, options);
  }
}

export default Progress;

import React from 'react';

class Progress extends React.Component {
  constructor(props) {
    super(props);

    this._drawChart = this._drawChart.bind(this);
  }

  componentDidMount() {
    this._loadChart();
  }

  render() {
    return(
      <div className="progress-container">
        <div id="chart-container" />
      </div>
    );
  }

  _loadChart() {
    const google = window.google;

    google.charts.load('current', { packages:['corechart']});
    google.charts.setOnLoadCallback(this._drawChart);
  }

  _drawChart() {
    const google = window.google;
    const { pageUser } = this.props;
    const { mappedLoops } = pageUser.givenLoops;

    const arrayData = [['days ago', 'loops']].concat(mappedLoops);
    const data = google.visualization.arrayToDataTable(arrayData);

    const options = {
      curveType: 'function',
      width: 600,
      height: 400,
      legend: { position: 'in' }
    };

    const chart = new google.visualization.LineChart(
      document.getElementById('chart-container')
    );

    chart.draw(data, options);
  }
}

export default Progress;

import React from 'react';

class Progress extends React.Component {

  componentDidMount() {
    const data = new google.visualiztion.DataTable();
  }

  render() {
    return(
      <div className="progress-container">
        <div className="chart-container">

        </div>
      </div>
    );
  }
}

export default Progress;

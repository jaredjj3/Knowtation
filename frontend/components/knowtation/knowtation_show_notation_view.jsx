import React from 'react';

class KnowtationShowNotationView extends React.Component {

  render() {
    const { knowtation } = this.props;

    return(
      <div
        id='knowtation-show-canvas-container'
        className='knowtation-show-view-container'
      >
        <canvas
          id='show-canvas'
          className='notation-show-view'
          height='285px'
          width='900px'
        />
      </div>
    );
  }
}

export default KnowtationShowNotationView;

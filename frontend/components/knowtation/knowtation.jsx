import React from 'react';

class Knowtation extends React.Component {

  componentDidMount() {
    this.props.requestKnowtation();
  }

  render() {
    const { knowtation } = this.props;
    const { videoUrl } = knowtation;

    return(
      <div className='knowtation-container group'>
        <iframe
          className='knowtation-video'
          src={ videoUrl.replace }
        />
      <div className='knowtation-settings'>I AM SETTINGS</div>
        <canvas className='knowtation-canvas' />
      </div>
    );
  }

}

export default Knowtation;

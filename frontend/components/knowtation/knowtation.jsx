import React from 'react';

class Knowtation extends React.Component {

  componentDidMount() {
    this.props.requestKnowtation();
  }

  render() {
    const { knowtation } = this.props;
    const { videoUrl } = knowtation;
    const modifiedVideoUrl = `${videoUrl.replace("watch?v=", "v/")}?autoplay=0&showinfo=0&controls=0`;

    return(
      <div className='knowtation-container group'>
        <iframe
          className='knowtation-video'
          src={ modifiedVideoUrl }
        />
      <div className='knowtation-settings'>I AM SETTINGS</div>
        <canvas className='knowtation-canvas' />
      </div>
    );
  }

}

export default Knowtation;

import React from 'react';
import ReactYouTube from 'react-youtube';

// this differs from the video player since the native controls
// will be disabled

class KnowtationShowViewPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.onReadyHandler = this.onReadyHandler.bind(this);
  }

  render() {
    const { knowtation } = this.props.props;

    return(
      <ReactYouTube
        id='show-video-player'
        className='knowtation-show-video'
        videoId={ knowtation.videoUrl }
        onReady={ this.onReadyHandler }
        onPlay={ this.onPlayHandler }
      />
    );
  }

  // event handlers

  onReadyHandler(e) {
    const { setElement } = this.props.props;
    setElement(e.target, 'video');
  }

  onPlayHandler(e) {

  }
}

export default KnowtationShowViewPlayer;

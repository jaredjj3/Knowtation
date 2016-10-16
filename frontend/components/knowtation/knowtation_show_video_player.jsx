import React from 'react';
import ReactYouTube from 'react-youtube';

// this differs from the video player since the native controls
// will be disabled

class KnowtationShowVideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.onReadyHandler = this.onReadyHandler.bind(this);
    this.onPlayHandler = this.onPlayHandler.bind(this);
  }

  render() {
    const { knowtation } = this.props;

    return(
      <ReactYouTube
        id='show-video-player'
        className='knowtation-show-video'
        videoId={ knowtation.videoUrl}
        onReady={ this.onReadyHandler }
        onPlay={ this.onPlayHandler }
        />
    );
  }

  // event handlers

  onReadyHandler(e) {
    const { setElement, toggleModal, setAttribute } = this.props;
    const video = e.target;
    setElement(video, 'video');
    setAttribute('videoIsReady', true);
    console.log('video is ready');
    setTimeout(() => {
      toggleModal('loading');
      video.playVideo();
    }, 3000);
  }

  onPlayHandler(e) {
    this.props.setDuration(e.target.getDuration());
  }
}

export default KnowtationShowVideoPlayer;

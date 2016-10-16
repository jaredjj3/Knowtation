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
    const opts = {
      playerVars: {
        disablekb: 1,
        modestbranding: 1,
        playsinline: 1,
      }
    };

    return(
      <ReactYouTube
        opts={ opts }
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
    const { duration } = this.props.knowtation;
    // can only get the duration after the player starts
    if (!duration) {
      this.props.setDuration(e.target.getDuration());
    }
  }
}

export default KnowtationShowVideoPlayer;

import React from 'react';
import ReactYouTube from 'react-youtube';

// this differs from the video player since the native controls
// will be disabled

class KnowtationShowVideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.onReadyHandler = this.onReadyHandler.bind(this);
    this.onPlayHandler = this.onPlayHandler.bind(this);
    this.onPauseHandler = this.onPauseHandler.bind(this);
    this.onEndHandler = this.onEndHandler.bind(this);
  }

  render() {
    const { knowtation } = this.props;
    const opts = {
      playerVars: {
        disablekb: 1,
        modestbranding: 1,
        playsinline: 1,
        controls: 0,
        fs: 0
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
        onEnd={ this.onEndHandler }
      />
    );
  }

  // event handlers

  onReadyHandler(e) {
    const { setElement, toggleModal, setAttribute } = this.props;
    const video = e.target;
    setElement(video, 'video');
    setAttribute('videoIsReady', true);
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

  onPauseHandler(e) {
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }
  }

  onEndHandler(e) {
    const video = e.target;
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }
    video.seekTo(0);
    video.playVideo();
  }
}

export default KnowtationShowVideoPlayer;

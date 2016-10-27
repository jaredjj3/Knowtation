import React from 'react';
import ReactYouTube from 'react-youtube';

class KnowtationEditorVideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.onReadyHandler = this.onReadyHandler.bind(this);
    this.onPlayHandler = this.onPlayHandler.bind(this);
    this._updateTimer = this._updateTimer.bind(this);
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

    return (
      <ReactYouTube
        id='video-player'
        opts={ opts }
        className='knowtation-editor-video-player'
        videoId={ knowtation.videoUrl }
        onReady={ this.onReadyHandler }
        onPlay={ this.onPlayHandler }
        onPause={ this.onPauseHandler }
        onEnd={ this.onEndHandler }
      />
    );
  }

  // helpers

  _updateTimer() {
    const { updateTime, knowtation } = this.props;
    const { videoElement } = knowtation;
    const currentTime = videoElement.getCurrentTime();
    updateTime(currentTime);
    requestAnimationFrame(this._updateTimer);
  }

  // event handler

  onReadyHandler(e) {
    const { setElement, toggleModal } = this.props;
    const video = e.target;
    setElement(video, 'video');
    setTimeout(() => {
      video.playVideo();
      setTimeout(() => {
        video.pauseVideo();
        video.seekTo(0);
        toggleModal('loading');
      }, 1000);
    }, 2000);

  }

  onPlayHandler(e) {
    const { setDuration } = this.props;
    window.videoTimer = requestAnimationFrame(this._updateTimer);
    setDuration(e.target.getDuration());
  }

  onPauseHandler(e) {
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }
  }

  onEndHandler(e) {
    const video = e.target;
    video.seekTo(0);
    video.playVideo();
  }
}

export default KnowtationEditorVideoPlayer;

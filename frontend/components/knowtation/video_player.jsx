import React from 'react';
import ReactYouTube from 'react-youtube';

const VideoPlayer = ({ knowtation, setElement, updateTime, setDuration }) => {
  const { videoElement } = knowtation;

  const onReadyHandler = e => {
    setElement(e.target, 'video');
  };

  const onPlayHandler = e => {
    window.videoTimer = setInterval(_updateTimer, 33); // 30 fps
    setDuration(e.target.getDuration());
  };

  const onPauseHandler = e => {
    if (window.videoTimer) {
      clearInterval(window.videoTimer);
    }
  };

  const onEndHandler = e => {
    if (window.videoTimer) {
      clearInterval(window.videoTimer);
    }
  };

  const _updateTimer = () => {
    const currentTime = videoElement.getCurrentTime();
    updateTime(currentTime);
  };

  return (
    <ReactYouTube
      id='video-player'
      className='knowtation-editor-video-player'
      videoId={ knowtation.videoUrl }
      onReady={ onReadyHandler }
      onPlay={ onPlayHandler }
      onPause={ onPauseHandler }
    />
  );
};

export default VideoPlayer;

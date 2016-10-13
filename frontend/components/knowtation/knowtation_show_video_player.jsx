import React from 'react';
import ReactYouTube from 'react-youtube';

// this differs from the video player since the native controls
// will be disabled

const KnowtationShowVideoPlayer = ({
  knowtation,
  setElement,
  updateTime,
  setDuration,
  isPlaying,
  toggleAttribute,
  createSyncPoint
}) => {
  const { videoElement } = knowtation;

  const onReadyHandler = e => {
    const video = e.target;
    setElement(video, 'video');
  };

  const onPlayHandler = e => {
    window.videoTimer = setInterval(_updateTimer, 50);
    setDuration(e.target.getDuration());

    if (!knowtation.isPlaying) {
      toggleAttribute('isPlaying');
    }
  };

  const onPauseHandler = e => {
    if (window.videoTimer) {
      clearInterval(window.videoTimer);
    }

    if (knowtation.isPlaying) {
      toggleAttribute();
    }
  };

  const onEndHandler = e => {
    if (window.videoTimer) {
      clearInterval(window.videoTimer);
    }

    if (knowtation.isPlaying) {
      toggleAttribute();
    }
  };

  const _updateTimer = () => {
    const currentTime = videoElement.getCurrentTime();
    updateTime(currentTime);
  };

  return(
    <ReactYouTube
      id='show-video-player'
      className='knowtation-show-video'
      videoId={ knowtation.videoUrl}
      onReady={ onReadyHandler }
      onPlay={ onPlayHandler }
    />
  );
};

export default KnowtationShowVideoPlayer;

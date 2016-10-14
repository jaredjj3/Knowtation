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
    setTimeout(() => video.playVideo(), 3000);
  };

  const onPlayHandler = e => {
    window.videoTimer = requestAnimationFrame(_updateTimer);
    setDuration(e.target.getDuration());

    if (!knowtation.isPlaying) {
      toggleAttribute('isPlaying');
    }
  };

  const onPauseHandler = e => {
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }

    if (knowtation.isPlaying) {
      toggleAttribute('isPlaying');
    }
  };

  const onEndHandler = e => {
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }

    if (knowtation.isPlaying) {
      toggleAttribute('isPlaying');
    }
  };

  const _updateTimer = () => {
    const currentTime = videoElement.getCurrentTime();
    updateTime(currentTime);
    requestAnimationFrame(_updateTimer);
  };

  return(
    <ReactYouTube
      id='show-video-player'
      className='knowtation-show-video'
      videoId={ knowtation.videoUrl}
      onReady={ onReadyHandler }
      onPlay={ onPlayHandler }
      onEnd={ onEndHandler }
    />
  );
};

export default KnowtationShowVideoPlayer;

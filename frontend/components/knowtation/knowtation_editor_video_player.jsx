import React from 'react';
import ReactYouTube from 'react-youtube';

const KnowtationEditorVideoPlayer = ({
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
    window.videoTimer = requestAnimationFrame(_updateTimer);
    setDuration(e.target.getDuration());
  };

  const onPauseHandler = e => {
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }
  };

  const onEndHandler = e => {
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }
  };

  const _updateTimer = () => {
    const currentTime = videoElement.getCurrentTime();
    updateTime(currentTime);
    requestAnimationFrame(_updateTimer);
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

export default KnowtationEditorVideoPlayer;

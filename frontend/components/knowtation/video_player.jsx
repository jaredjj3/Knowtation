import React from 'react';
import ReactYouTube from 'react-youtube';

const VideoPlayer = ({
  knowtation,
  setElement,
  updateTime,
  setDuration,
  isPlaying,
  toggleAttribute,
  createSyncPoint
}) => {
  const { videoElement } = knowtation;

  const checkSyncPoints = pos => {
    const { scrollInstructions } = knowtation;

    for (let i = 0; i < scrollInstructions.length; i++) {
      const syncPoint = scrollInstructions[i];
      const xDist = Math.abs(parseInt(syncPoint.pos.x) - parseInt(pos.x));
      if (xDist < 10) {
        return syncPoint;
      }
    }
    // if no matching sync point is found
    return null;
  };

  const onReadyHandler = e => {
    const video = e.target;
    setElement(video, 'video');

    const pos = { x: 0, y: 0 };
    const existingSyncPoint = checkSyncPoints(pos);

    if (!existingSyncPoint) {
      const time = 0.0;
      const id = knowtation.syncPointId;
      createSyncPoint({ pos, time, id });
    }
  };

  const onPlayHandler = e => {
    window.videoTimer = setInterval(_updateTimer, 50);
    setDuration(e.target.getDuration());

    if (!knowtation.isPlaying) {
      toggleAttribute();
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

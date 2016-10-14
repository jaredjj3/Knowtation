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
  isShowing,
  setAttribute,
  createSyncPoint,
  toggleModal
}) => {
  const { videoElement } = knowtation;

  const onReadyHandler = e => {
    const video = e.target;
    setElement(video, 'video');
    setAttribute('isShowing', true);
    setTimeout(() => {
      toggleModal('loading');
      video.playVideo();
    }, 3000);
  };

  const onPlayHandler = e => {
    setDuration(e.target.getDuration());
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

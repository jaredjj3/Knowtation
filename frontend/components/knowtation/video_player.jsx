import React from 'react';

const VideoPlayer = ({ knowtation }) => {
  const videoPlayQueryString = '?autoplay=0&showinfo=0&controls=2&loop=1&playsinline=1&fs=0&autohide=1&enablejsapi=1';

  let modifiedVideoUrl = '';
  if (knowtation.id !== null) {
    modifiedVideoUrl = `http://youtube.com/embed/${ knowtation.videoUrl }${ videoPlayQueryString }`;
  }

  const onLoadHandler = (e) => {
    
  };

  return (
    <iframe
      id='video-player'
      onLoad={ onLoadHandler }
      className='knowtation-editor-video-player'
      src={ modifiedVideoUrl }
    />
  );
};

export default VideoPlayer;

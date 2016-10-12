import React from 'react';
import ReactYouTube from 'react-youtube';

const VideoPlayer = ({ knowtation, setElement }) => {
  const videoPlayQueryString = '?autoplay=0&showinfo=0&controls=2&loop=1&playsinline=1&fs=0&autohide=1&enablejsapi=1';
  //
  // let modifiedVideoUrl = '';
  // if (knowtation.id !== null) {
  //   modifiedVideoUrl = `http://youtube.com/embed/${ knowtation.videoUrl }${ videoPlayQueryString }`;
  // }

  const options = {
    playerVars: {
      autoplay: 1
    }
  };

  const onReadyHandler = (e) => {
    setElement(e.target, 'video');
  };

  return (
    <ReactYouTube
      id='video-player'
      className='knowtation-editor-video-player'
      videoId={ knowtation.videoUrl }
      onReady={ onReadyHandler }
    />
  );
};

export default VideoPlayer;

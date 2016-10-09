import React from 'react';

class Knowtation extends React.Component {

  render() {

    return(
      <div className='knowtation-container group'>
        <iframe
          className='knowtation-video'
          src="https://www.youtube.com/embed/MhkGQAoc7bc"
          frameBorder="1"
        />
      <div className='knowtation-settings'>I AM SETTINGS</div>
        <canvas className='knowtation-canvas' />
      </div>
    );
  }

}

export default Knowtation;

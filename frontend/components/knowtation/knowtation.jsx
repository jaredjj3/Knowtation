import React from 'react';

class Knowtation extends React.Component {

  componentDidMount() {
    this.props.requestKnowtation();
  }

  render() {
    const { knowtation } = this.props;
    const { videoUrl } = knowtation;

    let modifiedVideoUrl = '';
    if (videoUrl) {
      modifiedVideoUrl = `http://youtube.com/embed/${videoUrl.replace("watch?v=", "")}`;
    }

    return(
      <div className='knowtation-container group'>
        <iframe
          className='knowtation-video'
          src={ modifiedVideoUrl }
        />
      <div className='knowtation-settings'>I AM SETTINGS</div>
        <canvas className='knowtation-canvas' />
      </div>
    );
  }

}

export default Knowtation;

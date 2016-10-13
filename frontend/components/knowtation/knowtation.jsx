import React from 'react';
import KnowtationShowVideoPlayer from './knowtation_show_video_player';
import KnowtationShowNotationView from './knowtation_show_notation_view';
import KnowtationShowControls from './knowtation_show_controls';

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
      <div className='knowtation-show-container'>
        <div className='knowtation-show'>

          <div className='knowtation-show-first-row'>
            <KnowtationShowVideoPlayer />
          </div>

          <div className='knowtation-show-seecond-row'>
            <KnowtationShowNotationView />
          </div>


          <div className='knowtation-show-third-row'>
            <KnowtationShowControls />
          </div>

        </div>
      </div>
    );
  }

}

export default Knowtation;

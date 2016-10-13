import React from 'react';
import KnowtationShowVideoPlayer from './knowtation_show_video_player';
import KnowtationShowNotationView from './knowtation_show_notation_view';
import KnowtationShowControls from './knowtation_show_controls';

class KnowtationPreview extends React.Component {


  render() {

    return(
      <div className='knowtation-preview-container'>
        <div className='knowtation-preview'>

          <div className='knowtation-preview-first-row'>
            <KnowtationShowVideoPlayer />
          </div>

          <div className='knowtation-preview-second-row'>
            <KnowtationShowNotationView />
          </div>

          <div className='knowtation-preview-third-row'>
            <KnowtationShowControls />
          </div>


        </div>
      </div>
    );
  }
}

export default KnowtationPreview;

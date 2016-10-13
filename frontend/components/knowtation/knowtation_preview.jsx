import React from 'react';
import KnowtationShowVideoPlayer from './knowtation_show_video_player';
import KnowtationShowNotationView from './knowtation_show_notation_view';
import KnowtationShowControls from './knowtation_show_controls';

class KnowtationPreview extends React.Component {
  constructor(props) {
    super(props);

    this.handleFinalizeClick = this.handleFinalizeClick.bind(this);
  }

  render() {
    return(
      <div className='knowtation-preview-container'>
        <div className='knowtation-preview'>

          <div className='knowtation-preview-first-row'>
            <KnowtationShowVideoPlayer props={ this.props }/>
          </div>

          <div className='knowtation-preview-second-row'>
            <KnowtationShowNotationView />
          </div>

          <div className='knowtation-preview-third-row'>
            <KnowtationShowControls />
          </div>

          <div className='knowtation-preview-fourth-row'>
            <button
              className='main-button'
              onClick={ this.handleFinalizeClick }
            >
              finalize
            </button>
          </div>

        </div>
      </div>
    );
  }

  // event handlers

  handleFinalizeClick(e) {

  }
}

export default KnowtationPreview;

import React from 'react';
import KnowtationShowVideoPlayer from './knowtation_show_video_player';
import KnowtationShowNotationView from './knowtation_show_notation_view';
import KnowtationShowControls from './knowtation_show_controls';

class KnowtationShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleFinalizeClick = this.handleFinalizeClick.bind(this);
  }

  componentWillMount() {
    const id = this.props.params.id;
    this.props.requestKnowtation(id);
  }

  render() {
    const { knowtation } = this.props;

    return(
      <div className='knowtation-preview-container'>
        <div className='knowtation-preview'>

          <div className='knowtation-preview-first-row'>
            <KnowtationShowVideoPlayer
              props={ this.props }
            />
          </div>

          <div className='knowtation-preview-second-row'>
            <KnowtationShowNotationView
              knowtation={ knowtation }
            />
          </div>

          <div className='knowtation-preview-third-row'>
            <KnowtationShowControls
              knowtation={ knowtation }
            />
          </div>

        </div>

        <button
          className='finalize main-button'
          onClick={ this.handleFinalizeClick }
        >
          finalize
        </button>
      </div>
    );
  }

  // event handlers

  handleFinalizeClick(e) {

  }
}

export default KnowtationShow;

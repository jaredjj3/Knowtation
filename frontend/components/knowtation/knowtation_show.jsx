import React from 'react';
import KnowtationShowVideoPlayer from './knowtation_show_video_player';
import KnowtationShowNotationView from './knowtation_show_notation_view';
import KnowtationShowControls from './knowtation_show_controls';
import { hashHistory } from 'react-router';

class KnowtationShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleFinalizeClick = this.handleFinalizeClick.bind(this);
    this.editButton = this.editButton.bind(this);
    this.finalizeButton = this.finalizeButton.bind(this);
  }

  componentWillMount() {
    const id = this.props.params.id;
    this.props.requestKnowtation(id);
  }

  render() {
    const { knowtation, setAttribute, updatePosition } = this.props;

    return(
      <div className='knowtation-show-container'>
        <div className='knowtation-show'>
          <div className='knowtation-show-first-row'>
            <KnowtationShowVideoPlayer
              props={ this.props }
            />
          </div>

          <div className='knowtation-show-second-row'>
            <KnowtationShowNotationView
              knowtation={ knowtation }
              setAttribute={ setAttribute }
              location={ this.props.location }
              updatePosition={ updatePosition }
            />
          </div>

          <div className='knowtation-show-third-row'>
            <KnowtationShowControls
              knowtation={ knowtation }
            />
          </div>
        </div>
        { this.editButton() }
        { this.finalizeButton() }
      </div>
    );
  }

  // event handlers

  handleFinalizeClick(e) {

  }

  handleBackClick(e) {

  }

  // helpers

  finalizeButton() {
    return(
      <button
        className='finalize main-button'
        onClick={ this.handleFinalizeClick }
      >
        finalize
      </button>
    );
  }

  editButton() {
    return(
      <button
        className='edit main-button'
        onClick={ this.handleBackClick }
      >
        edit
      </button>
    );
  }
}

export default KnowtationShow;

import React from 'react';
import KnowtationShowVideoPlayer from './knowtation_show_video_player';
import KnowtationShowNotationView from './knowtation_show_notation_view';
import KnowtationShowControls from './knowtation_show_controls';
import { hashHistory } from 'react-router';

class KnowtationShow extends React.Component {
  constructor(props) {
    super(props);

    this.editButton = this.editButton.bind(this);
    this.finalizeButton = this.finalizeButton.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFinalizeClick = this.handleFinalizeClick.bind(this);
  }

  componentWillMount() {
    const id = this.props.params.id;
    this.props.requestKnowtation(id);
  }

  componentWillUnmount() {
    console.log('unmount show');
    const { setAttribute, toggleAttribute } = this.props;
    toggleAttribute('isShowing');
    setAttribute('ctx', null);
    setAttribute('canvas', null);
    setAttribute('img', null);
    setAttribute('source', null);
    setAttribute('destination', null);
    setAttribute('scale', null);
  }

  render() {
    const {
      knowtation,
      setAttribute,
      updatePosition,
      setElement,
      updateTime,
      setDuration,
      isPlaying,
      toggleAttribute
    } = this.props;

    return(
      <div className='knowtation-show-container'>
        <div className='knowtation-show'>
          <div className='knowtation-show-first-row'>
            <KnowtationShowVideoPlayer
              knowtation={ knowtation }
              setElement={ setElement }
              updateTime={ updateTime }
              setDuration={ setDuration }
              isPlaying={ isPlaying }
              toggleAttribute={ toggleAttribute }
            />
          </div>

          <div className='knowtation-show-second-row'>
            <KnowtationShowNotationView
              knowtation={ knowtation }
              setAttribute={ setAttribute }
              location={ this.props.location }
              updatePosition={ updatePosition }
              toggleAttribute={ toggleAttribute }
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
    const { id } = this.props.params;
    hashHistory.push(`/knowtation/${id}`);
  }

  handleEditClick(e) {
    const { id } = this.props.params;
    hashHistory.push(`/knowtation/${id}/edit`);
  }

  // helpers

  finalizeButton() {
    const { pathname } = this.props.location;

    if ( pathname.match(/knowtation\/\d+\/preview/) ) {
      return(
        <button
          className='finalize main-button'
          onClick={ this.handleFinalizeClick }
        >
          finalize
        </button>
      );
    } else {
      return '';
    }
  }

  editButton() {
    const { currentUser, pageUserId } = this.props;

    if (currentUser && pageUserId && currentUser.id === pageUserId) {
      return(
        <button
          className='edit main-button'
          onClick={ this.handleEditClick }
        >
          edit
        </button>
      );
    } else {
      return '';
    }
  }
}

export default KnowtationShow;

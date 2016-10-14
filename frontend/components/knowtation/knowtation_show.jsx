import React from 'react';
import KnowtationShowVideoPlayer from './knowtation_show_video_player';
import KnowtationShowNotationView from './knowtation_show_notation_view';
import { hashHistory } from 'react-router';

class KnowtationShow extends React.Component {
  constructor(props) {
    super(props);

    this.editButton = this.editButton.bind(this);
    this.finalizeButton = this.finalizeButton.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFinalizeClick = this.handleFinalizeClick.bind(this);
  }

  componentDidMount() {
    const { requestKnowtation, setSyncPoint, setAttribute } = this.props;
    const id = this.props.params.id;
    requestKnowtation(id);
  }

  componentWillUnmount() {
    const { setAttribute } = this.props;

    setAttribute('ctx', false);
  }

  render() {
    const { props } = this;

    return(
      <div className='knowtation-show-container'>
        <div className='knowtation-show'>
          <div className='knowtation-show-first-row'>
            <KnowtationShowVideoPlayer { ...props } />
          </div>

          <div className='knowtation-show-second-row'>
            <KnowtationShowNotationView { ...props } />
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

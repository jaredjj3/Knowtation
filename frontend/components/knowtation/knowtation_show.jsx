import React from 'react';
import KnowtationShowVideoPlayer from './knowtation_show_video_player';
import KnowtationShowNotationView from './knowtation_show_notation_view';
import KnowtationShowPlayerControls from './knowtation_show_player_controls';
import KnowtationShowSidebar from './knowtation_show_sidebar';
import { hashHistory, Link } from 'react-router';

class KnowtationShow extends React.Component {
  constructor(props) {
    super(props);

    this.editButton = this.editButton.bind(this);
    this.finalizeButton = this.finalizeButton.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFinalizeClick = this.handleFinalizeClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { requestKnowtation, toggleModal, clearKnowtation } = this.props;
    const routeChanged = newProps.location !== this.props.location;
    if (routeChanged) {
      window.location.reload();
    }
  }

  componentDidMount() {
    const { requestKnowtation, setSyncPoint, setAttribute, toggleModal } = this.props;
    const id = this.props.params.id;
    toggleModal('loading');
    requestKnowtation(id);
  }

  componentWillUnmount() {
    this.props.clearKnowtation();
  }

  render() {
    const { props } = this;
    const { title, authorName, userId } = props.knowtation;

    return(
      <div>
        <div className="knowtation-show-and-sidebar">
          <div className='knowtation-show-container'>
            <h1 className='knowtation-show-title'>{ title }</h1>
            <Link to={ `/profile/${userId}` }>
              <h2 className='knowtation-show-author'>{ authorName }</h2>
            </Link>
            <div className='knowtation-show'>
              <div className='knowtation-show-first-row'>
                <KnowtationShowVideoPlayer { ...props } />
              </div>

              <div className="knowtation-show-player-controls">
                <KnowtationShowPlayerControls {...props} />
              </div>

              <div className='knowtation-show-second-row'>
                <KnowtationShowNotationView { ...props } />
              </div>

            </div>

            { this.editButton() }
            { this.finalizeButton() }
          </div>
          <div className="knowtation-show-sidebar">
            <KnowtationShowSidebar {...props} />
          </div>
        </div>
    </div>
    );
  }

  // event handlers

  handleFinalizeClick(e) {
    const { id } = this.props.params;
    hashHistory.push(`/knowtation/${id}`);
  }

  handleEditClick(e) {
    const { id } = this.props. params;
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

    if (currentUser && pageUserId && (currentUser.id === pageUserId || currentUser.username === "guest_teacher")) {
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

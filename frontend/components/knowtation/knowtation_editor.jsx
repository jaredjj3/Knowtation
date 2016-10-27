import React from 'react';
import KnowtationTools from './knowtation_tools';
import KnowtationEditorVideoPlayer from './knowtation_editor_video_player';
import KnowtationEditorNotationView from './knowtation_editor_notation_view';
import KnowtationEditorPlayerControls from './knowtation_editor_player_controls';
import { hashHistory } from 'react-router';

class KnowtationEditor extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
    this.verifySyncPoints = this.verifySyncPoints.bind(this);
  }

  componentDidMount() {
    const { requestKnowtation, setSyncPoint, setAttribute, toggleModal } = this.props;
    const id = this.props.params.id;
    requestKnowtation(id);
    toggleModal('loading');
  }

  componentWillUnmount() {
    const { clearKnowtation } = this.props;
    clearKnowtation();
  }

  render() {
    const { props } = this;

    return (
      <div className="knowtation-editor-container">
        <div className="knowtation-editor">

            <div className="knowtation-editor-first-row">
              <div className='knowtation-editor-video-container'>
                <KnowtationEditorVideoPlayer {...props} />
              </div>

              <div className='knowtation-editor-tools-container'>
                <KnowtationTools {...props} />
              </div>
            </div>

            <div className="knowtation-editor-player-controls">
              <KnowtationEditorPlayerControls {...props} />
            </div>

            <div className="knowtation-editor-second-row">
              <div className='knowtation-editor-notation-container'>
                <KnowtationEditorNotationView {...props} />
              </div>
            </div>

        </div>
        <button
          className='preview-and-finalize main-button'
          onClick={ this.onClickHandler }
        >
          preview and finalize
        </button>
      </div>
    );
  }

  // event handlers

  onClickHandler(e) {
    const {
      updateKnowtation,
      finalizeSyncPoints,
      sortSyncPoints
    } = this.props;
    const { verifySyncPoints } = this;
    sortSyncPoints();
    verifySyncPoints();
    const knowtationData = {
      scroll_instructions: JSON.stringify(
        window.store.getState().knowtation.scrollInstructions
      ),
      id: this.props.knowtation.id
    };
    updateKnowtation(knowtationData);
    hashHistory.push(`/knowtation/${this.props.knowtation.id}/preview`);
  }

  verifySyncPoints() {
    const { createSyncPoint, sortSyncPoints } = this.props;
    const { scrollInstructions } = window.store.getState().knowtation;
    if (scrollInstructions.length === 0 || scrollInstructions[0].time > 0) {
      createSyncPoint({
        pos: { x: 25, y: 0},
        id: this.props.knowtation.syncPointId,
        time: 0
      });
      sortSyncPoints();
    }
    const knowtation = window.store.getState().knowtation;
    const last = knowtation.scrollInstructions.length - 1;
    const lastTime = knowtation.scrollInstructions[last].time;
    if (lastTime < knowtation.videoElement.getDuration()) {
      createSyncPoint({
        pos: { x: knowtation.destination.width - 20, y: 0},
        id: knowtation.syncPointId,
        time: knowtation.videoElement.getDuration()
      });
      sortSyncPoints();
    }
  }

}

export default KnowtationEditor;

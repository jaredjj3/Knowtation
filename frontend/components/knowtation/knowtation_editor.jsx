import React from 'react';
import KnowtationTools from './knowtation_tools';
import KnowtationEditorVideoPlayer from './knowtation_editor_video_player';
import KnowtationEditorNotationView from './knowtation_editor_notation_view';
import { hashHistory } from 'react-router';

class KnowtationEditor extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const { requestKnowtation, setSyncPoint, setAttribute } = this.props;
    const id = this.props.params.id;
    requestKnowtation(id);
    setAttribute('isEditing', true);
  }

  componentWillUnmount() {
    const { setAttribute } = this.props;

    setAttribute('ctx', null);
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
    const { updateKnowtation, knowtation } = this.props;
    const knowtationData = {
      scroll_instructions: JSON.stringify(knowtation.scrollInstructions),
      id: knowtation.id
    };
    updateKnowtation(knowtationData);
    hashHistory.push(`/knowtation/${knowtation.id}/preview`);
  }

}

export default KnowtationEditor;

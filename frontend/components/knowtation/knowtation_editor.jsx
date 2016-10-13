import React from 'react';
import VideoPlayer from './video_player';
import KnowtationTools from './knowtation_tools';
import NotationView from './notation_view';

class KnowtationEditor extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const { requestKnowtation, setElement} = this.props;

    const id = this.props.params.id;
    requestKnowtation(id);
  }

  componentDidUpdate() {

  }

  render() {
    const {
      knowtation,
      togglePlaying,
      setElement,
      updateTime,
      setDuration,
      setAttribute,
      createSyncPoint,
      deleteSyncPoint,
      toggleModal,
      timeModalOn
   } = this.props;

    return (
      <div className="knowtation-editor-container">
        <div className="knowtation-editor">

            <div className="knowtation-editor-first-row">
              <div className='knowtation-editor-video-container'>
                <VideoPlayer
                  knowtation={ knowtation }
                  setElement={ setElement }
                  updateTime={ updateTime }
                  setDuration={ setDuration }
                  togglePlaying={ togglePlaying }
                />
              </div>
              <div className='knowtation-editor-tools-container'>
                <KnowtationTools
                  knowtation={ knowtation }
                  deleteSyncPoint={ deleteSyncPoint }
                />
              </div>
            </div>

            <div className="knowtation-editor-second-row">
              <div className='knowtation-editor-notation-container'>
                <NotationView
                  knowtation={ knowtation }
                  setAttribute={ setAttribute }
                  createSyncPoint={ createSyncPoint }
                  deleteSyncPoint={ deleteSyncPoint }
                  toggleModal={ toggleModal }
                  timeModalOn={ timeModalOn }
                />
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

  onClickHandler() {
    
  }


}

export default KnowtationEditor;

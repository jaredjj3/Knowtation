import React from 'react';
import VideoPlayer from './video_player';
import KnowtationTools from './knowtation_tools';
import NotationView from './notation_view';

class KnowtationEditor extends React.Component {
  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    const { requestKnowtation, setElement} = this.props;

    const id = this.props.params.id;
    requestKnowtation(id);
  }

  componentDidUpdate() {
    const { knowtation } = this.props;
    const { videoElement } = knowtation;


  }

  render() {
    const { knowtation, togglePlaying, setElement, updateTime, setDuration } = this.props;

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
              />
            </div>
            <div className='knowtation-editor-tools-container'>
              <KnowtationTools knowtation={ knowtation }/>
            </div>
          </div>

          <div className="knowtation-editor-second-row">
            <div className='knowtation-editor-notation-container'>
              <NotationView knowtation={ knowtation }/>
            </div>
            <div className='knowtation-editor-controls'>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // event handlers

  updateTime(e) {

  }

}

export default KnowtationEditor;

import React from 'react';

class KnowtationEditor extends React.Component {
  constructor(props) {
    super(props);

    this._videoPlayer = this._videoPlayer.bind(this);
  }

  render() {
    const { knowtation } = this.props;

    return (
      <div className="knowtation-editor-container">
        <div className="knowtation-editor">

          <div className="knowtation-editor-first-row">
            <div className='knowtation-editor-video-container'>
              <VideoPlayer knowtation={ knowtation }/>
            </div>
            <div className='knowtation-editor-tools-container'>
              I AM TOOLS
            </div>
          </div>

          <div className="knowtation-editor-second-row">
            <div className='knowtation-editor-notation-container'>
              I AM NOTATION
            </div>
          </div>

        </div>
      </div>
    );
  }

  // event handlers

}

export default KnowtationEditor;

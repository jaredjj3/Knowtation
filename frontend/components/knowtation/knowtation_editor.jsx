import React from 'react';
import VideoPlayer from './video_player';
import KnowtationTools from './knowtation_tools';
import NotationView from './notation_view';

class KnowtationEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.params.id;
    this.props.requestKnowtation(id);

    const knowtation = this.props.knowtation;
    const canvas = document.getElementById('canvas');
    
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
              <KnowtationTools knowtation={ knowtation }/>
            </div>
          </div>

          <div className="knowtation-editor-second-row">
            <div className='knowtation-editor-notation-container'>
              <NotationView knowtation={ knowtation }/>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // event handlers

}

export default KnowtationEditor;

import React from 'react';

class KnowtationEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  render() {

    return(
      <div className='knowtation-editor-container group' >
        <iframe
          className='editor-video-container'
          src="https://www.youtube.com/embed/MhkGQAoc7bc"
          frameBorder="1"
        />
        <div className='knowtation-editor-tools'>
         I AM TOOLS
        </div>
        <canvas className='knowtation-editor-canvas' />
      </div>
    );
  }
}

export default KnowtationEditor;

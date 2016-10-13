import React from 'react';

class KnowtationShowControls extends React.Component {

  render() {

    return(
      <div className='knowtation-show-controls'>
        <ul className='knowtation-show-controls-list'>
          <li>{ this.playOrPauseButton }</li>
        </ul>
      </div>
    );
  }

  // helpers

  playOrPauseButton() {
    const { isPlaying } = this.props.knowtation;
    debugger
    if (isPlaying) {
      return <i className="material-icons">pause</i>;
    } else {
      return <i className="material-icons">play_arrow</i>;
    }
  }


}

export default KnowtationShowControls;

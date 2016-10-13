import React from 'react';

class KnowtationShowControls extends React.Component {
  constructor(props) {
    super(props);

    this.playOrPauseButton = this.playOrPauseButton.bind(this);
    this.loopOrUnloopButton = this.loopOrUnloopButton.bind(this);
    this.muteOrUnMuteButton = this.muteOrUnMuteButton.bind(this);
  }


  render() {

    return(
      <div className='knowtation-show-seek'>
        
      </div>
    );
  }

  // helpers

  playOrPauseButton() {
    const { isPlaying } = this.props.knowtation;

    if (isPlaying) {
      return <i className="material-icons">pause</i>;
    } else {
      return <i className="material-icons">play_arrow</i>;
    }
  }

  muteOrUnMuteButton() {
    const { isMuted } = this.props.knowtation;

    if (isMuted) {
      return <i className="material-icons">volume_up</i>;
    } else {
      return <i className="material-icons">volume_off</i>;
    }

  }

  loopOrUnloopButton() {
    const { isLooping } = this.props.knowtation;

    if (isLooping) {
      return <i className="material-icons">sync_disabled</i>;
    } else {
      return <i className="material-icons">sync</i>;
    }

  }


}

export default KnowtationShowControls;

 import React from 'react';
import { toTimeString } from '../../util/time_string';

class KnowtationShowPlayerControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seekValue: 0,
      playbackRate: 1,
      volume: 0
    };

    this.replay = this.replay.bind(this);
    this.videoTime = this.videoTime.bind(this);
    this.seekSlider = this.seekSlider.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.toggleSpeed = this.toggleSpeed.bind(this);
    this.volumeSlider = this.volumeSlider.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.updateSeekSlider = this.updateSeekSlider.bind(this);
    this.updateVolumeSlider = this.updateVolumeSlider.bind(this);
    this.handleReplayClick = this.handleReplayClick.bind(this);
    this.handleToggleSpeedClick = this.handleToggleSpeedClick.bind(this);
    this.handleSeekSliderChange = this.handleSeekSliderChange.bind(this);
    this.handleVolumeSliderChange = this.handleVolumeSliderChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { knowtation } = newProps;
    const { videoElement } = knowtation;
    if (
      videoElement &&
      knowtation.videoIsReady &&
      videoElement.getPlayerState() === 1
    ) {
      this.updateSeekSlider(videoElement);
      this.updateVolumeSlider(videoElement);
    }
  }

  render() {
    const {
      playOrPause,
      replay,
      toggleSpeed,
      videoTime,
      seekSlider,
      volumeSlider
    } = this;
    return (
      <div className="controls-container">
        <div className="controls-seek-bar-container">
          <div className="show-controls-seek-bar-spacer">
            <div className="show-controls-seek-bar">
              { seekSlider() }
            </div>
          </div>
        </div>
        <ul className="controls-buttons">
          { playOrPause() }
          { volumeSlider() }
          { videoTime() }
          { replay() }
          { toggleSpeed() }
        </ul>
      </div>
    );
  }

  // event listeners

  handlePlayClick(e) {
    const { videoElement }  = this.props.knowtation;
    videoElement.playVideo();
  }

  handlePauseClick(e) {
    const { videoElement }  = this.props.knowtation;
    videoElement.pauseVideo();
  }

  handleReplayClick(e) {
    const { videoElement } = this.props.knowtation;
    const currentTime = videoElement.getCurrentTime();
    const duration = videoElement.getDuration();
    let adjustedTime = currentTime - 2;
    adjustedTime = adjustedTime < 0 ? duration + adjustedTime : adjustedTime;
    videoElement.seekTo(adjustedTime);
    this.updateSeekSlider(videoElement);
  }

  handleToggleSpeedClick(e) {
    const { videoElement } = this.props.knowtation;
    let playbackRates = videoElement.getAvailablePlaybackRates();
    for (let i = 0; i < playbackRates.length; i++) {
      if (playbackRates[i] === 1) {
        playbackRates = playbackRates.slice(0, i + 1).reverse();
        break;
      }
    }
    const playbackRate = videoElement.getPlaybackRate();
    const newPlaybackRate = playbackRates[
      (playbackRates.indexOf(playbackRate) + 1) % playbackRates.length
    ];
    videoElement.setPlaybackRate(newPlaybackRate);
    this.setState({ playbackRate: newPlaybackRate });
  }

  handleSeekSliderChange(e) {
    const { videoElement } = this.props.knowtation;
    videoElement.pauseVideo();
    const seekValue = e.target.value;
    this.setState({ seekValue });
    const seekToTime = ( seekValue / 100 ) * videoElement.getDuration();
    videoElement.seekTo(seekToTime);
  }

  handleVolumeSliderChange(e) {
    const { videoElement } = this.props.knowtation;
    const volume = e.target.value;
    this.setState({ volume });
    videoElement.setVolume(volume);
  }

  // helpers

  updateSeekSlider(videoElement) {
    const currentTime = videoElement.getCurrentTime();
    const duration = videoElement.getDuration();
    const seekValue = (currentTime / duration) * 100;
    this.setState({ seekValue });
  }

  updateVolumeSlider(videoElement) {
    const volume = videoElement.getVolume();
    this.setState({ volume });
  }

  playOrPause() {
    const { videoElement } = this.props.knowtation;
    const play = <li onClick={ this.handlePlayClick }><i className="material-icons controls-play-button" >play_arrow</i></li>;
    const pause = <li onClick={ this.handlePauseClick }><i className="material-icons controls-pause-button">pause</i></li>;

    if (!videoElement) {
      return play;
    }
    const playerState = videoElement.getPlayerState();

    // https://developers.google.com/youtube/js_api_reference
    switch (playerState) {
      case -1:
        return play;
      case 0:
        return play;
      case 1:
        return pause;
      case 2:
        return play;
      case 3:
        return pause;
      default:
        return play;
    }
  }

  replay() {
    return (
      <li>
        <i
          className="material-icons controls-replay"
          onClick={ this.handleReplayClick }
        >
          replay
        </i>
      </li>
    );
  }

  toggleSpeed() {
    return (
      <li className="controls-slow">
        <i
          className="material-icons"
          onClick={ this.handleToggleSpeedClick }
        >
          slow_motion_video
        </i>
        <span>&nbsp;&nbsp;x&nbsp;{ this.state.playbackRate.toFixed(2) }</span>
      </li>
    );
  }

  videoTime() {
    const { videoElement } = this.props.knowtation;
    if (!videoElement) {
      return <li className='controls-video-time'>0.0 / 0.0</li>;
    }
    const currentTime = toTimeString(videoElement.getCurrentTime());
    const duration = toTimeString(videoElement.getDuration());
    return (
      <li className='controls-video-time'>{ currentTime } / { duration }</li>
    );
  }

  seekSlider() {
    const { videoElement } = this.props.knowtation;
    if (!videoElement) {
      return(
        <li>
          <input
            className="show-controls-seek-slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={ this.state.seekValue }
            onChange={ this.handleSeekSliderChange }
          >
          </input>
        </li>
      );
    }

    return (
      <li>
        <input
          className="show-controls-seek-slider"
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={ this.state.seekValue }
          onChange={ this.handleSeekSliderChange }
        >
        </input>
      </li>
    );
  }

  volumeSlider() {
    return(
      <li className="controls-volume-slider">
        <i className="material-icons">volume_up</i>
        <input
          className="controls-volume-slider-range"
          type="range"
          min="0"
          max="100"
          step="1"
          value={ this.state.volume }
          onChange={ this.handleVolumeSliderChange }
        >
        </input>
      </li>
    );
  }

}

export default KnowtationShowPlayerControls;

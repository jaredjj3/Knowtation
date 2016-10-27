 import React from 'react';
import { toTimeString } from '../../util/time_string';

class KnowtationPlayerControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seekValue: 0,
      playbackRate: 1
    };

    this.replay = this.replay.bind(this);
    this.videoTime = this.videoTime.bind(this);
    this.seekSlider = this.seekSlider.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.toggleSpeed = this.toggleSpeed.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.updateSeekSlider = this.updateSeekSlider.bind(this);
    this.handleReplayClick = this.handleReplayClick.bind(this);
    this.handleToggleSpeedClick = this.handleToggleSpeedClick.bind(this);
    this.handleSeekSliderChange = this.handleSeekSliderChange.bind(this);
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
    }
  }

  render() {
    const {
      playOrPause,
      replay,
      toggleSpeed,
      videoTime,
      seekSlider
    } = this;
    return (
      <div className="controls-container">
        <div className="controls-seek-bar-container">
          <div className="controls-seek-bar">
            { seekSlider() }
          </div>
        </div>
        <ul className="controls-buttons">
          <li>{ playOrPause() }</li>
          <li>{ replay() }</li>
          <li>{ toggleSpeed() }</li>
          <li>{ videoTime() }</li>
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
    videoElement.pauseVideo();
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

  // helpers

  updateSeekSlider(videoElement) {
    const currentTime = videoElement.getCurrentTime();
    const duration = videoElement.getDuration();
    const seekValue = (currentTime / duration) * 100;
    this.setState({ seekValue });
  }

  playOrPause() {
    const { videoElement } = this.props.knowtation;
    const play = <i className="material-icons controls-play-button" onClick={ this.handlePlayClick }>play_arrow</i>;
    const pause = <i className="material-icons controls-pause-button" onClick={ this.handlePauseClick }>pause</i>;

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
      <i
        className="material-icons controls-replay"
        onClick={ this.handleReplayClick }
      >
        replay
      </i>
    );
  }

  toggleSpeed() {
    return (
      <span>
        <i
          className="material-icons controls-slow"
          onClick={ this.handleToggleSpeedClick }
        >
          slow_motion_video
        </i> x { this.state.playbackRate }
      </span>
    );
  }

  videoTime() {
    const { videoElement } = this.props.knowtation;
    if (!videoElement) {
      return <span></span>;
    }
    const currentTime = toTimeString(videoElement.getCurrentTime());
    const duration = toTimeString(videoElement.getDuration());
    return (
      <span>{ currentTime } / { duration }</span>
    );
  }

  seekSlider() {
    const { videoElement } = this.props.knowtation;
    if (!videoElement) {
      return(
        <input
          className="controls-seek-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value={ this.state.seekValue }
          onChange={ this.handleSeekSliderChange }
        >
        </input>
      );
    }

    // const currentTime = videoElement.getCurrentTime();
    // const duration = videoElement.getDuration();

    return (
      <input
        className="controls-seek-slider"
        type="range"
        min="0"
        max="100"
        step="0.1"
        value={ this.state.seekValue }
        onChange={ this.handleSeekSliderChange }
      >
      </input>
    );
  }

}

export default KnowtationPlayerControls;

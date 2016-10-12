import React from 'react';
import Modal from 'react-modal';
import style from '../../util/modal_style';
import { toTimeString, fromTimeString } from '../../util/time_string';

class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      autoplay: true
    };
    this._reset = this._reset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.handleAutoplayChange = this.handleAutoplayChange.bind(this);
  }

  render() {
    const { timeModalOn, knowtation } = this.props;
    const { currentTime } = knowtation;

    return(
      <Modal
        className='time-form-container form-container'
        isOpen={ timeModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >

        <form onSubmit={ this.handleSubmit }>
          <input
            id='time-input'
            type='text'
            value={ this.state.time }
            onChange={ this.handleChange }
            placeholder='time in seconds'
            className='form-input-field'
          />
          <input
            type='submit'
            value='Submit'
            className='main-button'
          />
          <label>
            <input
              id="autoplay"
              type="checkbox"
              onChange={ this.handleAutoplayChange }
              checked={ this.state.autoplay }
            />autoplay
          </label>
        </form>
        or { toTimeString(currentTime) }

      </Modal>
    );
  }

  // event handlers

  handleChange(e) {
    const time = e.target.value.replace(/\s/g, '');

    const isNumeric = value => Number(parseFloat(value)) == value;

    if (isNumeric(time)) {
      this.setState({ time });
    } else {
      this.setState({ time: time.slice(0, time.length - 1)});
    }
  }

  handleAutoplayChange(e) {
    this.setState({
      autoplay: !this.state.autoplay
    });
  }

  handleClickOut(e) {
    const {
      timeModalOn,
      toggleModal,
      deleteSyncPoint,
      syncPointId
    } = this.props;

    deleteSyncPoint(syncPointId);

    this._reset();
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      knowtation,
      toggleModal,
      timeModalOn,
      deleteSyncPoint,
      syncPointId
    } = this.props;
    const { scrollInstructions } = knowtation;
    const last = scrollInstructions.length - 1;
    const { time, autoplay } = this.state;

    if (time) {
      scrollInstructions[last].time = parseFloat(time);
    } else {
      deleteSyncPoint(syncPointId);
    }

    this._reset();
  }

  // helpers

  _reset() {
    const { timeModalOn, toggleModal, knowtation } = this.props;
    const { autoplay } = this.state;

    this.setState({ time: '' });

    if (timeModalOn) {
      toggleModal('time');
    }

    if (autoplay) {
      knowtation.videoElement.playVideo();
    }
  }

}

export default TimeForm;

import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import Icon from '../icon';
import style from '../../util/modal_style';

class TeachForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 'yes'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
  }

  handleClickOut() {
    if (this.props.teachModalOn) {
      this.props.toggleModal('teach');
    }
  }

  handleOnChange(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const application = this.state;
    if (application.answer === 'yes') {
      this.props.sendApplication(application);
    }
  }

  render() {
    const { teachModalOn, teacherErrors } = this.props;

    return(
      <Modal
        className="teach-form form-container"
        isOpen={ teachModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >
        <Icon />
        <h1 className="logo">Knowtation</h1>
          <form onSubmit={ this.handleSubmit }>
            <span className='teach-question'>
              Do you enjoy teaching guitar?
            </span>
            <div className='radio-container'>
              <label for='yes'>yes</label>
              <input type="radio" name='answer' value='yes' checked="checked"/>
              <label for='no'>no</label>
              <input type="radio" name='answer' value='no' checked="checked"/>
            </div>
          <input
            className="form-submit"
            type="submit"
            value="Submit"
          />
          </form>
      </Modal>
    );
  }
}

export default TeachForm;

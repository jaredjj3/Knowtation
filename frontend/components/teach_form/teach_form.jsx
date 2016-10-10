import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import TeacherErrorItem from '../error/teacher_error_item';
import Icon from '../icon';
import style from '../../util/modal_style';

class TeachForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      link: "",
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
    this.props.sendApplication(application);
  }

  render() {
    const { teachModalOn, teacherErrors } = this.props;

    const teacherErrorItems = teacherErrors.map((teacherError, idx) => (
      <TeacherErrorItem key={ idx } teacherError={ teacherError }/>
    ));

    return(
      <Modal
        className="form-container"
        isOpen={ teachModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >
        <Icon />
        <h1 className="logo">Knowtation</h1>
          <form onSubmit={ this.handleSubmit }>
            <ul className="errors">
              { teacherErrorItems }
            </ul>
            <textarea
              className="bio form-input-field"
              onChange={ this.handleOnChange("bio") }
              value={ this.state.bio }
              placeholder="tell us about yourself"
            >
          </textarea>
          <input
            className="portfolio-link form-input-field"
            onChange={ this.handleOnChange('link') }
            type="text"
            value={ this.state.link }
            placeholder="link us your work"
          >
          </input>
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

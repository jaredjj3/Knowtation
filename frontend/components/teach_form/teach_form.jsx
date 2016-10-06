import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import TeacherErrorItem from '../error/teacher_error_item';
import Icon from '../icon';

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
    if (this.props.modalOn) {
      this.props.toggleModal('session');
    }
    hashHistory.push("/");
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
    const { modalOn, teacherErrors } = this.props;

    const style = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(150, 150, 150, 0.80)'
      }
    };

    const teacherErrorItems = teacherErrors.map((teacherError, idx) => (
      <TeacherErrorItem key={ idx } teacherError={ teacherError }/>
    ));

    return(
      <Modal
        className="form-container"
        isOpen={ modalOn }
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

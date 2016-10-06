import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';

class TeachForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      link: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
  }

  handleClickOut () {
    if (this.props.modalOn) {
      this.props.toggleModal('session');
    }
    hashHistory.push("/");
  }

  handleSubmit(e) {
    e.preventDefault();
    const application = this.state;
    this.props.sendApplication({ application });
  }

  render() {
    const { modalOn } = this.props;

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

    return(
      <Modal
        className="teach-form-container"
        isOpen={ true }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >
        <h1 className="logo">Knowtation</h1>
          <form onSubmit={ this.handleSubmit }>


          </form>
      </Modal>
    );
  }
}

export default TeachForm;

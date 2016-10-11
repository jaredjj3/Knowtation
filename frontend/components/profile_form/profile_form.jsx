import React from 'react';
import Modal from 'react-modal';
import style from '../../util/modal_style';
import Icon from '../icon';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    const { pageUser } = this.props;
    this.state = {
      bio: pageUser.bio
    };
  }


  render() {
    const { profileModalOn } = this.props;

    return(
      <Modal
        className='form-container group'
        isOpen={ profileModalOn }
        onRequestClose={ this.handleClickOut }
        style={ style }
      >
        <Icon />
        <h1 className="logo">Knowtation</h1>
        <input
          type='text'
          value={ this.state.bio }
          placeholder='tell us about yourself'
        />
      <div className='profile-picture-container'>

      </div>
      </Modal>
    );
  }

  // private

  _uploadPictureDisplay() {
    
  }

}

export default ProfileForm;

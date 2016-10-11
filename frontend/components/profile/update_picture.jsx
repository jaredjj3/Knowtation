import React from 'react';

const UpdatePicture = ({ currentUser, pageUser, toggleModal }) => {

  const handleOnClick = modal => {

    return e => {
      toggleModal(modal);
    };
  };

  if ( currentUser && currentUser.id === pageUser.id ) {
    return (
      <div
        className="profile-icon-container"
        onClick={ handleOnClick('profile') }
      >
        <i className="material-icons">photo_camera</i>
        <figcaption>Update profile picture</figcaption>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UpdatePicture;

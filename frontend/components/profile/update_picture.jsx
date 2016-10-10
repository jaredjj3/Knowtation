import React from 'react';

const UpdatePicture = ({ currentUser, pageUser, callback }) => {

  if ( currentUser.id === pageUser.id ) {
    return (
      <div
        className="profile-icon-container"
        onClick={ callback }
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

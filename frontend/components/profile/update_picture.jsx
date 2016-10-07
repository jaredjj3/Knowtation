import React from 'react';

const UpdatePicture = ({ currentUser, userId }) => {

  if ( currentUser.id === userId ) {
    return (
      <div className="profile-icon-container">
        <i className="material-icons">photo_camera</i>
        <figcaption>Update profile picture</figcaption>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UpdatePicture;

import React from 'react';
import Biography from './biography';
import Progress from './progress';
import Saved from './saved';

class Profile extends React.Component {

  render() {
    return (
      <div className="profile-container">
        <Biography />
        <Progress />
        <Saved />
      </div>
    );
  }
}

export default Profile;

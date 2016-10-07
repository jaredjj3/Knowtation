import React from 'react';
import Biography from './biography';
import Progress from './progress';
import Saved from './saved';

class Profile extends React.Component {

  componentDidMount() {
    this.props.requestUser(this.props.params.id);
  }

  render() {
    const { username, country, bio, userType } = this.props;

    return (
      <div className="profile-container">
        <Biography
          username={ username }
          country={ country }
          bio={ bio }
          userType={ userType }
        />
        <Progress />
        <Saved />
      </div>
    );
  }
}

export default Profile;

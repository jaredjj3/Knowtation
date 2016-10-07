import React from 'react';
import Biography from './biography';
import Progress from './progress';
import Saved from './saved';

class Profile extends React.Component {

  componentDidMount() {
    this.props.requestUser(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    this.props.requestUser(newProps.params.id);
  }

  render() {
    const { username, country, bio, userType, currentUser, userId } = this.props;

    return (
      <div className="profile-container">
        <Biography
          username={ username }
          country={ country }
          bio={ bio }
          userType={ userType }
          currentUser={ currentUser }
          userId={ userId }
        />
        <Progress />
        <Saved />
      </div>
    );
  }
}

export default Profile;

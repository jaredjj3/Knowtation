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
    const { currentUser, pageUser, updateUser, toggleModal } = this.props;

    return (
      <div className="profile-container">
        <div className="secondary-profile-container">
          <Biography
            currentUser={ currentUser }
            pageUser={ pageUser }
            updateUser={ updateUser }
            toggleModal={ toggleModal }
            />
        </div>
      </div>
    );
  }
}

export default Profile;

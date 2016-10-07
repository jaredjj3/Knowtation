import React from 'react';

class Biography extends React.Component {

  render() {
    const { username, country, bio, userType } = this.props;
    return(
      <div className="biography-container group">
        <div className="biography">
          <img className="profile-picture"/>
          <div className="biography-text">
            <h1 className="profile-username">{ username }</h1>
            <h2 className="profile-country">{ country }</h2>
            <h3 className="profile-user-type">{ userType }</h3>
            <p className="profile-bio">{ bio }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Biography;

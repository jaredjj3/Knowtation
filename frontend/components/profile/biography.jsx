import React from 'react';

class Biography extends React.Component {

  render() {
    const { username, country, bio } = this.props;
    return(
      <div className="biography-container group">
        <img className="profile-picture"/>
        <div className="biography-text">
          <h1 className="profile-username">{ username }</h1>
          <h2 className="profile-country">{ country }</h2>
          <p className="profile-bio">{ bio }</p>
        </div>
      </div>
    );
  }
}

export default Biography;

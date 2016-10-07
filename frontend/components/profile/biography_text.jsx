import React from 'react';

class BiographyText extends React.Component {
  constructor(props) {
    super(props);
    const { currentUser, pageUser } = this.props;
    this.state = {
      editing: false,
      country: pageUser.country,
      bio: pageUser.bio
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this._pageIsCurrentUser = this._pageIsCurrentUser.bind(this);
  }

  handleEditClick(e) {
    this.setState({
      editing: true
    });
  }

  render() {
    const { currentUser, pageUser } = this.props;
    const { username, country, userType, bio } = pageUser;
    const { pageIsCurrentUser } = this.state;

    return(
      <div className="biography-text">
        { this._iconDisplay() }
        { this._usernameDisplay(username) }
        { this._userTypeDisplay(userType) }
        { this._countryDisplay(country) }
        { this._bioDisplay(bio) }
      </div>
    );
  }

  _pageIsCurrentUser() {
    const { currentUser, pageUser } = this.props;
    return currentUser.id === pageUser.id;
  }

  _usernameDisplay(username) {
    return <h1 className="profile-username">{ username }</h1>;
  }

  _iconDisplay() {
    const { editing } = this.state;
    if (this._pageIsCurrentUser()) {
      if (editing) {
        return (
          <ul className='profile-edit-buttons-container'>
            <li>
              <button
                onClick={ this.handleEditClick }
                className='main-button'
              >
                  Save
              </button>
            </li>
            <li>
              <button
                onClick={ this.handleEditClick }
                className='main-button'
              >
                  Discard
              </button>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className='profile-edit-buttons-container'>
            <li>
              <button
                onClick={ this.handleEditClick }
                className='main-button'
              >
                  Edit
              </button>
            </li>
          </ul>
        );
      }
    } else {
      return <div></div>;
    }
  }

  _countryDisplay(country) {
    if (country === null && this._pageIsCurrentUser()) {
      return <h2 className="null-profile-country">country</h2>;
    } else {
      return <h2 className="profile-country">{ country }</h2>;
    }
  }

  _userTypeDisplay(userType) {
    return <h3 className="profile-user-type">{ userType }</h3>;
  }

  _bioDisplay(bio) {
    if (bio === null && this._pageIsCurrentUser()) {
      return <p className="null-profile-bio">tell us about yourself</p>;
    } else {
      return <p className="profile-bio">{ bio }</p>;
    }
  }
}

export default BiographyText;

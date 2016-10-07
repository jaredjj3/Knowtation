import React from 'react';

class BiographyText extends React.Component {
  constructor(props) {
    super(props);
    const { currentUser, pageUser } = this.props;
    const { country, bio } = pageUser;

    this.state = {
      editing: false,
      country,
      bio
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleDiscardClick = this.handleDiscardClick.bind(this);
    this._pageIsCurrentUser = this._pageIsCurrentUser.bind(this);
    this.countryChangeHandler = this.countryChangeHandler.bind(this);
  }

  handleEditClick(e) {
    this.setState({
      editing: true
    });
  }

  handleSaveClick(e) {
    this.setState({
      editing: false
    });
  }

  handleDiscardClick(e) {
    this.setState({
      editing: false
    });
  }

  countryChangeHandler(e) {
    this.setState({
      country: e.currentTarget.value
    });
  }

  render() {
    const { currentUser, pageUser } = this.props;
    const { username, country, userType, bio } = pageUser;
    const { pageIsCurrentUser } = this.state;

    return(
      <div className="biography-text group">
        <div className="username-container">
          { this._usernameDisplay(username) }
          { this._iconDisplay() }
        </div>
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
                onClick={ this.handleSaveClick }
                className='main-button'
              >
                  Save
              </button>
            </li>
            <li>
              <button
                onClick={ this.handleDiscardClick }
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
    if (this.state.editing) {
      // If editing
      return (
        <input
          type='text'
          className='profile-country editing-profile-country'
          onChange={ this.countryChangeHandler }
          value={ this.state.country }
          placeholder='country'
        />
      );
    } else {
      // If not editing
      if (country === null && this._pageIsCurrentUser()) {
        return <h2 className="profile-country null-profile-country">country</h2>;
      } else {
        return <h2 className="profile-country">{ country }</h2>;
      }
    }
  }

  _userTypeDisplay(userType) {
    return <h3 className="profile-user-type">{ userType }</h3>;
  }

  _bioDisplay(bio) {
    if (this.state.editing) {
      // If editing
      const placeholder = "tell us about yourself";
      return <textarea className="editing-profile-bio profile-bio" placeholder={ placeholder }></textarea>;
    } else {
      // If not editing
      if (bio === null && this._pageIsCurrentUser()) {
        return <p className="null-profile-bio profile-bio">tell us about yourself</p>;
      } else {
        return <p className="profile-bio">{ bio }</p>;
      }
    }
  }
}

export default BiographyText;

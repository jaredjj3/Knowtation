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
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  handleEditClick(e) {
    let { country, bio } = this.state;

    if (country === null) {
      country = "";
    }

    if (bio === null) {
      bio = "";
    }

    this.setState({
      editing: true,
      country,
      bio
    });
  }

  handleSaveClick(e) {
    const { bio, country } = this.state;
    const id = this.props.pageUser.id;

    const user = {
      bio,
      country,
      id
    };
    this.props.updateUser(user);
    this.setState({
      editing: false,
      bio,
      country
    });
  }

  handleDiscardClick(e) {
    const { currentUser } = this.props;
    this.setState({
      editing: false,
      country: currentUser.country,
      bio: currentUser.bio
    });
  }

  inputChangeHandler(property) {

    return e => {
      this.setState({
        [property]: e.currentTarget.value
      });
    };
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
          value={ this.state.country }
          className='profile-country editing-profile-country'
          onChange={ this.inputChangeHandler('country') }
          placeholder='country'
        />
      );
    } else {
      // If not editing
      if (country === null && this._pageIsCurrentUser()) {
        return (
          <h2
            className="profile-country null-profile-country"
            onClick={ this.handleEditClick }
          >
            country
          </h2>
        );
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
      return (
        <textarea
          value={ this.state.bio }
          className="editing-profile-bio profile-bio"
          placeholder={ placeholder }
          onChange={ this.inputChangeHandler('bio') }
        />
      );
    } else {
      // If not editing
      if (bio === null && this._pageIsCurrentUser()) {
        return(
          <p
            className="null-profile-bio profile-bio"
            onClick={ this.handleEditClick }
          >
            tell us about yourself
          </p>
        );
      } else {
        return <p className="profile-bio">{ bio }</p>;
      }
    }
  }
}

export default BiographyText;

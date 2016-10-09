import React from 'react';

class BiographyText extends React.Component {
  constructor(props) {
    super(props);
    const { currentUser, pageUser } = this.props;
    const { bio } = pageUser;
    this.state = {
      editing: false,
      bio
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleDiscardClick = this.handleDiscardClick.bind(this);
    this._pageIsCurrentUser = this._pageIsCurrentUser.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  handleEditClick(e) {
    let { bio } = this.state;

    if (bio === null) {
      bio = "";
    }

    this.setState({
      editing: true,
      bio
    });
  }

  handleSaveClick(e) {
    const { bio } = this.state;
    const id = this.props.pageUser.id;

    const user = {
      bio,
      id
    };

    this.props.updateUser(user);
    this.setState({
      editing: false,
      bio
    });
  }

  handleDiscardClick(e) {
    const { currentUser } = this.props;
    this.setState({
      editing: false,
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
    const { username, userType, bio } = pageUser;
    const { pageIsCurrentUser } = this.state;

    return(
      <div className="biography-text group">
        <div className="username-container">
          { this._usernameDisplay(username) }
          { this._iconDisplay() }
        </div>
        { this._userTypeDisplay(userType) }
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

  _userTypeDisplay(userType) {
    return <h3 className="profile-user-type">{ userType }</h3>;
  }

  _bioDisplay(bio) {
    if (this.state.editing) {
      // If editing
      const placeholder = "tell us about yourself";
      return (
        <form>
          <textarea
            value={ this.state.bio }
            className="editing-profile-bio profile-bio"
            placeholder={ placeholder }
            onChange={ this.inputChangeHandler('bio') }
            />
        </form>
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

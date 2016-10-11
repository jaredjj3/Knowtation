import React from 'react';

class BiographyText extends React.Component {
  constructor(props) {
    super(props);
    const { currentUser, pageUser } = this.props;
    const { bio } = pageUser;
    this.state = {
      bio
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this._pageIsCurrentUser = this._pageIsCurrentUser.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const oldUser = this.props.pageUser;
    const newUser = newProps.pageUser;

    if (oldUser.id !== newUser.id) {
      const { bio } = newUser;
      this.setState({
        bio
      });
    }
  }

  handleEditClick(e) {
    this.props.toggleModal('profile');
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
      bio
    });
  }

  handleDiscardClick(e) {
    const { currentUser } = this.props;
    this.setState({
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
          { this._editDisplay() }
        </div>
        { this._userTypeDisplay(userType) }
        { this._bioDisplay(bio) }
      </div>
    );
  }

  _pageIsCurrentUser() {
    const { currentUser, pageUser } = this.props;

    if (currentUser === null) {
      return false;
    } else {
      return currentUser.id === pageUser.id;
    }
  }

  _usernameDisplay(username) {
    return <h1 className="profile-username">{ username }</h1>;
  }

  _editDisplay() {
    if (this._pageIsCurrentUser()) {
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
    } else {
      return <div></div>;
    }
  }

  _userTypeDisplay(userType) {
    return <h3 className="profile-user-type">{ userType }</h3>;
  }

  _bioDisplay(bio) {
    if (bio === null && this._pageIsCurrentUser()) {
      return(
        <span
          className="null-profile-bio profile-bio"
          onClick={ this.handleEditClick }
        >
          tell us about yourself
        </span>
      );
    } else {
      return <p className="profile-bio">{ bio }</p>;
    }
  }

}

export default BiographyText;

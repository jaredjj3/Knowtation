import React from 'react';

class BiographyText extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { props } = this.props;
    const { requestUser } = props;
    const oldUser = props.pageUser;
    const newUser = newProps.pageUser;

    if (oldUser && newUser && oldUser.id !== newUser.id) {
      requestUser(newUser.id);
    }
  }

  handleEditClick(e) {
    const { props } = this.props;
    props.toggleModal('profile');
  }

  render() {
    const { props } = this.props;
    const { pageUser } = props;
    const { username, userType, bio } = pageUser;

    return(
      <div className="biography-text group">
        <div className="username-container">
          <h1 className="profile-username">{ username }</h1>
          { this._editDisplay() }
        </div>
        <h3 className="profile-user-type">{ userType }</h3>
        { this._bioDisplay(bio) }
      </div>
    );
  }

  _editDisplay() {
    const { props } = this.props;
    const { pageIsCurrentUser } = props;

    if (pageIsCurrentUser) {
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

  _bioDisplay(bio) {
    const { props } = this.props;
    const { pageIsCurrentUser } = props;

    if (bio === null && pageIsCurrentUser) {
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

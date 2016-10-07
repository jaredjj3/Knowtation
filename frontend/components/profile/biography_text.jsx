import React from 'react';

class BiographyText extends React.Component {
  constructor(props) {
    super(props);
    const { pageUser } = this.props;
    this.state = {
      country: pageUser.country,
      bio: pageUser.bio
    };
    this.setupInputFields();
    this.handleClick = this.handleClick.bind(this);
    this.setupInputFields = this.setupInputFields.bind(this);
  }

  handleClick(property) {
    return e => {
      this.setState({
        [property]: 'asdfsdf'
      });
    };
  }

  _nullHandleClick(property) {
    return e => {};
  }

  // Displays the information as input fields if the currentUser
  // is the pageUser
  setupInputFields() {
    const { currentUser, pageUser } = this.props;
    if (currentUser.id === pageUser.id) {
      const { username, country, userType, bio } = currentUser;
      this.countryDisplay = this._countryDisplay(country);
      this.userTypeDisplay = this._userTypeDisplay(userType);
      this.bioDisplay = this._bioDisplay(bio);
    } else {
      const { username, country, userType, bio } = pageUser;
      this.countryDisplay = <h2 className="profile-country">{ country }</h2>;
      this.userTypeDisplay = <h3 className="profile-user-type">{ userType }</h3>;
      this.bioDisplay = <p className="profile-bio">{ bio }</p>;
    }
  }

  // Methods used for currentUser properties, not pageUser
  // -----------------------------------------------------
  _usernameDisplay(username) {

  }

  _countryDisplay(country) {
    if (country === null) {
      return <h2>Where are you from?</h2>;
    } else {
      return <h2>{ country }</h2>;
    }
  }

  _userTypeDisplay(userType) {
    if (userType === 'student') {
      return <h3>Wanna be a teacher?</h3>;
    } else {
      return <h3>Teacher</h3>;
    }
  }

  _bioDisplay(bio) {
    if (bio === 'null') {
      return <textarea placeholder="tell us about yourself"></textarea>;
    } else {
      return <p className="profile-bio">{ bio }</p>;
    }
  }

  // -----------------------------------------------------

  render() {
    const { currentUser, pageUser } = this.props;
    const { username, country, userType, bio } = pageUser;

    return(
      <div className="biography-text">
        <h1 className="profile-username">{ username }</h1>
        { this.countryDisplay }
        { this.userTypeDisplay }
        { this.bioDisplay }
      </div>
    );
  }


};

export default BiographyText;

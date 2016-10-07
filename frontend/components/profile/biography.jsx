import React from 'react';
import UpdatePicture from './update_picture';
import BiographyText from './biography_text';

class Biography extends React.Component {

  render() {
    const { currentUser, pageUser, updateUser } = this.props;

    return(
      <div className="biography-container group">
        <div className="biography">
          <div className="profile-picture-container">
            <img className="profile-picture"/>
            <UpdatePicture
              currentUser={ currentUser }
              pageUser={ pageUser }/>
          </div>
          <BiographyText
            currentUser={ currentUser }
            pageUser={ pageUser }
            updateUser={ updateUser }
          />
        </div>
      </div>
    );
  }
}

export default Biography;

import React from 'react';

class NewKnowtationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      videoUrl: "",
      thumbnailFile: null,
      thumbnailUrl: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImportVideoLinkClick = this.handleImportVideoLinkClick.bind(this);
  }

  handleImportVideoLinkClick(e) {
    const { title, videoUrl } = this.state;
    const { currentUser } = this.props;
    const knowtation = {
      video_url: videoUrl,
      title,
      user_id: currentUser.id
    };
    this.props.updateKnowtation(knowtation);
  }

  handleChange(property) {
    return e => {
      this.setState({
        [property]: e.currentTarget.value
      });
    };
  }

  render() {
    return(
      <div className='new-knowtation-form-container group'>
        <h1 className='new-knotation-form-title'>Upload</h1>
        <div className='new-knowtation-form-image'>
          <input
            type='text'
            value={this.state.title}
            placeholder='title'
            onChange={ this.handleChange('title') }
          />
          <input
            type='text'
            value={this.state.videoUrl}
            placeholder='link'
            onChange={ this.handleChange('link') }
          />
          <button
            className='main-button'
            onClick={ this.handleImportVideoLinkClick }
          >
            import video url
          </button>
          <button
            className='main-button'
          >
            upload notation
          </button>
        </div>
        <img
          className='new-knotation-thumbnail'
          src="http://i.imgur.com/4eOIYhp.jpg"
        />
        <button
          className='main-button upload-thumbnail-button'
        >
          upload thumbnail
        </button>
      </div>
    );
  }
}

export default NewKnowtationForm;

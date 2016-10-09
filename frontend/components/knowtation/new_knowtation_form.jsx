import React from 'react';

class NewKnowtationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
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
        <div className='new-knowtation-form-image'>
          <input
            type='text'
            value={this.state.title}
            placeholder='title'
            onChange={ this.handleChange('title') }
          />
          <button className='main-button'>upload thumbnail</button>
          <button className='main-button'>upload video</button>
          <button className='main-button'>upload notation</button>
        </div>
        <img
          className='new-knotation-thumbnail'
          src="http://i.imgur.com/4eOIYhp.jpg"
        />
      </div>
    );
  }
}

export default NewKnowtationForm;

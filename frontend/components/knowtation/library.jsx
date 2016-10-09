import React from 'react';

class Library extends React.Component {

  componentDidMount() {
    this.props.requestAllKnowtations();
  }

  render() {
    const { knowtations } = this.props;

    const knowtationItems = knowtations.map( (knowtation, idx) => {
      return (
        <li key={ idx }>
          <img src={ knowtation.thumbnailUrl }/>
        </li>
      );
    });

    return(
      <div className='library-container group'>
          <ul className='library-list'>
            { knowtationItems }
          </ul>
        );
      </div>
    );
  }
}

export default Library;

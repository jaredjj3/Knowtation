import React from 'react';

class Library extends React.Component {

  render() {

    return(
      <div className='library-container group'>
        <ul className='library-list'>
          <KnowtationIndex />
        </ul>
      </div>
    );
  }
}

export default Library;

import React from 'react';
import { Link } from 'react-router';

class Library extends React.Component {

  componentDidMount() {
    if (this.props.knowtations.length < 24) {
      console.log('ouch!');
      this.props.requestAllKnowtations();
    }
  }

  render() {
    const { knowtations } = this.props;

    const knowtationItems = knowtations.map( (knowtation, idx) => {
      const author = knowtation.user;
      return (
        <li className='library-list-item' key={ idx }>
          <div className='library-list-knowtation-link'>
            <Link to={ `/knowtation/${knowtation.id}` }>
              <img src={ knowtation.thumbnailUrl }/>
              <h2>{ knowtation.title }</h2>
            </Link>
          </div>
          <Link to={ `/profile/${author.id}` }>
            <h3>{ author.username }</h3>
          </Link>
        </li>
      );
    });

    return(
      <div className='library-container group'>
          <ul className='library-list'>
            { knowtationItems }
          </ul>
      </div>
    );
  }
}

export default Library;

import React from 'react';
import { Link } from 'react-router';

class KnowtationShowSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  componentDidMount() {
    const { knowtations, requestAllKnowtations } = this.props;
    if (knowtations && knowtations.length === 0) {
      requestAllKnowtations();
    }
  }

  render() {
    const { knowtations } = this.props;
    const currentPageKnowtationId = this.props.knowtation.id;
    const shuffledKnowtations = knowtations;
    const knowtationListItems = shuffledKnowtations.filter( knowtation => (
      knowtation.id !== currentPageKnowtationId
    )).map( knowtation => (
      <li className="library-list-item show-sidebar-list-item" key={ knowtation.id }>
        <div
          id={ knowtation.id }
          className='library-list-knowtation-link'
          onMouseEnter={ this.onMouseEnterHandler }
          onMouseLeave={ this.onMouseLeaveHandler }
        >
          <Link to={ `/knowtation/${knowtation.id}` }>
            <img id={ knowtation.id } src={ knowtation.thumbnailUrl } />
            <div
              id={ `library-metadata-${ knowtation.id }` }
              className='hide-metadata'
            >
              <span className='first-row'>{ knowtation.receivedLoops }<i className="material-icons spin">loop</i></span>
              <span className='second-row'>{ knowtation.tags.map( tag => `${tag.name}`).join(' • ') }</span>
            </div>
            <h2>{ knowtation.title }</h2>
          </Link>
        </div>
        <Link to={ `/profile/${knowtation.user.id}` }>
          <h3>{ knowtation.user.username }</h3>
        </Link>
      </li>
    ));

    return(
      <ul className="show-sidebar-item-list">
        { knowtationListItems }
      </ul>
    );
  }

  // helpers

  // event handlers

  onMouseEnterHandler(e) {
    const id = e.currentTarget.id;
    const idName = `library-metadata-${ id }`;
    console.log(idName);
    document.getElementById(idName).className = 'show-metadata';
  }

  onMouseLeaveHandler(e) {
    const id = e.currentTarget.id;
    const idName = `library-metadata-${ id }`;
    document.getElementById(idName).className = 'hide-metadata';
  }
}

export default KnowtationShowSidebar;

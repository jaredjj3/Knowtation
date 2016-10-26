import React from 'react';
import SyncPointListItem from './sync_point_list_item';

class SyncPointList extends React.Component {
  constructor(props) {
    super(props);
    this.syncPoints = this.syncPoints.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  render() {
    const { syncPoints } = this;
    return(
      <ul className='sync-point-list'>
        { syncPoints() }
      </ul>
    );
  }

  // event handlers

  handleDeleteClick(e) {
    this.props.deleteSyncPoint(e.target.id);
  }

  // helpers

  syncPoints() {
    const { knowtation } = this.props;
    const { handleDeleteClick } = this;
    if (knowtation.scrollInstructions === "[]") {
      return "";
    }
    const sortByTime = (a, b) => {
      if (a.time < b.time) {
        return -1;
      } else if (a.time === b.time) {
        return 0;
      } else if (a.time > b.time) {
        return 1;
      }
    };
    return (
      knowtation
        .scrollInstructions
        .sort(sortByTime)
        .map((syncPoint, idx) => (
          <li
            className='sync-point-li' id={ idx + 1 }
            key={ syncPoint.id }
          >
            <SyncPointListItem
              syncPoint={ syncPoint }
              updateSyncPoint={ this.props.updateSyncPoint }
            />
            <i
              id={ syncPoint.id }
              className="material-icons"
              onClick={ handleDeleteClick }
            >
              delete
            </i>
          </li>
      ))
    );
  }

}

export default SyncPointList;

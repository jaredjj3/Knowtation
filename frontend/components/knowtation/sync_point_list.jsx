import React from 'react';
import { toTimeString } from '../../util/time_string';

const SyncPointList = ({ knowtation, deleteSyncPoint }) => {

  if (knowtation.id === null || knowtation.scrollInstructions.length === 0) {
    return <ul className='sync-point-list'></ul>;
  }

  const handleDeleteClick = e => {
    deleteSyncPoint(e.target.id);
  };

  const syncPoints = knowtation.scrollInstructions.map((syncPoint, idx) => (
    <li id={ idx + 1 } key={ syncPoint.id } >
      #{ idx + 1 } at { toTimeString(syncPoint.time) }
      <i
        id={ syncPoint.id }
        className="material-icons"
        onClick={ handleDeleteClick }
      >
        delete
      </i>
    </li>
  ));

  return(
    <ul className='sync-point-list'>
      { syncPoints }
    </ul>
  );
};

export default SyncPointList;

import React from 'react';

const SyncPointList = ({ knowtation, deleteSyncPoint }) => {

  if (knowtation.id === null || knowtation.scrollInstructions.length === 0) {
    return <ul className='sync-point-list'></ul>;
  }

  const handleLiClick = e => {
    deleteSyncPoint(e.target.id);
  };

  const syncPoints = knowtation.scrollInstructions.map((syncPoint) => (
    <li
      key={ syncPoint.id }
      id={ syncPoint.id }
      onClick={ handleLiClick }
    >
      x: { syncPoint.pos.x }, y: { syncPoint.pos.y }, time: { syncPoint.time }, id: { syncPoint.id }
    </li>
  ));

  return(
    <ul className='sync-point-list'>
      { syncPoints }
    </ul>
  );
};

export default SyncPointList;

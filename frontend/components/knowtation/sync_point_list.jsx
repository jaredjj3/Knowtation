import React from 'react';

const SyncPointList = ({ knowtation }) => {

  if (knowtation.id === null) {
    
  }

  const syncPoints = knowtation.scrollInstructions.map((syncPoint, idx) => (
    <li key={ idx }>pos: { syncPoint.pos }, time: { syncPoint.time }</li>
  ));

  return(
    <ul className='sync-point-list'>
      { syncPoints }
    </ul>
  );
};

export default SyncPointList;

import React from 'react';
import SyncPointList from './sync_point_list';
import { toTimeString } from '../../util/time_string';

const KnowtationTools = ({
  knowtation,
  deleteSyncPoint,
  updateKnowtation,
  updateSyncPoint
}) => {
  const { videoElement } = knowtation;

  const currentTime = () => {
    if (videoElement) {
      return toTimeString(knowtation.currentTime);
    } else {
      return '0.0';
    }
  };

  const handleSaveClick = e => {
    const knowtationData = {
      scroll_instructions: JSON.stringify(knowtation.scrollInstructions),
      id: knowtation.id
    };
    updateKnowtation(knowtationData);
    alert('Knowtation saved.');
  };

  return(
    <div className='knowtation-tools-container'>
      <div className='knowtation-tools-secondary'>

        <div className='knowtation-tools-first-row'>
          <ul className='knowtation-tools-icon-list'>
            <li><i onClick={ handleSaveClick } className="material-icons">save</i></li>
            <li><i className="material-icons">watch</i> { currentTime() }</li>
          </ul>
        </div>

        <div className='knowtation-tools-second-row'>
          <h1>sync points</h1>
          <SyncPointList
            knowtation={ knowtation }
            deleteSyncPoint={ deleteSyncPoint }
            updateSyncPoint={ updateSyncPoint }
          />
        </div>

        <div className='knowtation-tools-third-row'>

        </div>
      </div>
    </div>
  );
};

export default KnowtationTools;

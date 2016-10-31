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
    const notificationEl = document.getElementById('saved-notification');
    notificationEl.className = 'show-notification';
    notificationEl.innerHTML = 'saved';
    setTimeout(() => {
      notificationEl.innerHTML = '';
      notificationEl.className = 'hide-notification';
    }, 3000);
  };

  return(
    <div className='knowtation-tools-container'>
      <div className='knowtation-tools-secondary'>

        <div className='knowtation-tools-first-row'>
          <ul className='knowtation-tools-icon-list'>
            <li className='save'><i onClick={ handleSaveClick } className="material-icons">save</i></li>
            <li id='saved-notification' className='hide-notification'></li>
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

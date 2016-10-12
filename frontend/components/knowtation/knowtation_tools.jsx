import React from 'react';
import SyncPointList from './sync_point_list';
import { toTimeString } from '../../util/time_string';

const KnowtationTools = ({ knowtation, deleteSyncPoint }) => {
  const { videoElement } = knowtation;

  const currentTime = () => {
    if (videoElement) {
      return toTimeString(knowtation.currentTime);
    } else {
      return '0.0';
    }
  };


  return(
    <div className='knowtation-tools-container'>
      <div className='knowtation-tools-secondary'>
        <ul className='knowtation-tools-icon-list'>
          <li><i className="material-icons">list</i></li>
          <li><i className="material-icons">save</i></li>
        </ul>
        <i className="material-icons">watch</i> { currentTime() }
        <SyncPointList
          knowtation={ knowtation }
          deleteSyncPoint={ deleteSyncPoint }
        />
      </div>
    </div>
  );
};

export default KnowtationTools;

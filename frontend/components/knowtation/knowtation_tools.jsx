import React from 'react';
import SyncPointList from './sync_point_list';

const KnowtationTools = ({ knowtation }) => {
  const { videoElement } = knowtation;

  const currentTime = () => {
    if (videoElement) {
      let result = toTimeString(knowtation.currentTime);
      result += ` /  ${toTimeString(knowtation.duration)}`;
      return result;
    } else {
      return '00:00:00 / 00:00:00';
    }
  };

  const toTimeString = seconds => {
    let mins = Math.floor(seconds / 60);
    if (mins < 10) {
      mins = `0${mins}`;
    }

    let secs = Math.floor(seconds % 60);
    if (secs < 10) {
      secs = `0${secs}`;
    }

    let msecs = Math.round(100 * (seconds - secs));
    if (msecs < 10) {
      msecs = `0${msecs}`;
    }

    return `${mins}:${secs}:${msecs}`;
  };

  return(
    <div className='knowtation-tools-container'>
      { currentTime() }
      <SyncPointList knowtation={ knowtation } />
    </div>
  );
};

export default KnowtationTools;

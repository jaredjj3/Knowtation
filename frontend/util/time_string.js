export const toTimeString = seconds => {
  // not doing this since most videos are < 1 min
  // let mins = Math.floor(seconds / 60);
  // if (mins < 10) {
  //   mins = `0${mins}`;
  // }
  //
  // let secs = Math.floor(seconds % 60);
  // if (secs < 10) {
  //   secs = `0${secs}`;
  // }
  //
  // let msecs = Math.round(100 * (seconds - secs));
  // if (msecs < 10) {
  //   msecs = `0${msecs}`;
  // }
  //
  // return `${mins}:${secs}:${msecs}`;
  return seconds.toFixed(1);
};

export const toSeconds = timeString => {


};

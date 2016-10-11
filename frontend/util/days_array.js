// this util returns an array of objects that represent the number
// of days ago (v) and the letter of the day that corresponds with it
// (f)

// integer in 0..6, that is, the number of times to rotate - 1
const todaysDay = new Date().getDay() + 1;
const push = Array.prototype.push;
const splice = Array.prototype.splice;

let daysArray = ['s', 'm', 't', 'w', 't', 'f', 's'];
push.apply(daysArray, splice.call(daysArray, 0, todaysDay));
daysArray = daysArray.reverse();
daysArray = daysArray.map((day, idx) => ({ v: idx, f: day }));
export default daysArray;

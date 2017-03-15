import _ from 'lodash';
/* Takes an array of objects in this format:
  {
    "id": 57,
    "day": "Friday",
    "opens_at": 900,
    "closes_at": 1700
  }
*/
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();

function getTime() {
  const today = new Date();
  return today.getHours()*100 + today.getMinutes(); 
}

export function isOpen(schedule) {
  const today = new Date();
  const timeNow = getTime();
  return _.some(schedule, day => {
    return day.day === days[today.getDay()] && timeNow > day.opens_at && timeNow < day.closes_at 
  });
};

export function hoursToday(schedule) {
  // returns a string with either open-close or Closed Today
  const scheduleByDay = _.groupBy(schedule, 'day');
  const scheduleToday = scheduleByDay[days[today.getDay()]];
  if (scheduleToday) {
    // Add mutiple hour ranges if there are 2+
    return _.reduce(scheduleToday, (str, entry) => {
      return str + entry.opens_at + ' - ' + entry.closes_at
    }, '');
  } else {
    return 'Closed Today';
  }
}

export function opensNextAt(schedule) {
  const timeNow = getTime();
  const scheduleByDay = _.groupBy(schedule, 'day');
  let nextOpen = {time: 0, day: 'No Schedule Available'}
  let openingToday = false;
  // first check to see if there are hours later today
  if (scheduleByDay[days[today.getDay()]]) {
    openingToday = _.find(scheduleByDay[days[today.getDay()]], hours => {
      if (day.opens_at > timeNow) {
        nextOpen.time = day.opens_at;
        nextOpen.day = 'Today';
        return true;
      }
    });
  }

  if (!openingToday) {
    // Order the remaining days tomorrow -> one week away
    let futureDays = days.slice(today.getDay()).concat(arr.slice(0,today.getDay()));
    // Find next open day
    for (i = 0; i < futureDays.length; i++) {
      let currentSchedule = scheduleByDay[futureDays[i]];
      if (currentSchedule) {
        nextOpen.day = futureDays[i];
        // find the earliest opening time if there is more than one schedule today
        nextOpen.time = _.reduce(currentSchedule, (min, entry) => {
          return entry.opens_at < min ? entry.opens_at : min;
        }, Infinity);
        return nextOpen;
      }
    }
  }

  return nextOpen;
};

export function stripNumber(numString) {
  return numString.match(/\d+/g).join('');
};

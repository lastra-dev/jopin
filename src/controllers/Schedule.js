/*global chrome*/

import Formatters from "../helpers/Formatters";
import EntryStorage from "../controllers/EntryStorage";

class Schedule {
  static create(entry) {
    for (let i = 0; i < entry.days.length; i++) {
      if (entry.days[i] === 0) {
        continue;
      }
      let nearestWeekDayDate = this.getDateOfNearestWeekDay(i);
      nearestWeekDayDate.setHours(
        Formatters.timeToHour(entry.hour),
        Formatters.timeToMinutes(entry.hour),
        0 // seconds
      );

      // Alarms need different names
      // so we differentiate them with the week day number
      this.createAlarm(
        `${entry.url} weekDay:${i}`,
        nearestWeekDayDate.getTime()
      );
    }
  }

  static edit(id, entry) {
    const oldEntry = EntryStorage.get(id);
    this.delete(oldEntry);
    this.create(entry);
  }

  static delete(entry) {
    for (let i = 0; i < entry.days.length; i++) {
      if (entry.days[i] === 0) {
        continue;
      }
      chrome.alarms.clear(`${entry.url} weekDay:${i}`);
    }
  }

  static deleteAll() {
    chrome.alarms.clearAll();
  }

  // Solution by Tim
  // https://stackoverflow.com/questions/1579010/get-next-date-from-weekday-in-javascript
  static getDateOfNearestWeekDay(weekDayNumber) {
    let result = new Date();
    result.setDate(
      result.getDate() + ((weekDayNumber + (7 - result.getDay())) % 7)
    );
    return result;
  }

  static createAlarm(url, date) {
    let alarmInfo = {};
    alarmInfo.when = date;
    alarmInfo.periodInMinutes = 10080; // every week
    chrome.alarms.create(url, alarmInfo);
  }
}

export default Schedule;

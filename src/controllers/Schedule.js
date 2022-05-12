/*global chrome*/

class Schedule {
  static create(entry) {
    for (let i = 0; i < entry.days.length; i++) {
      if (entry.days[i] === 0) { continue; }
      let nearestWeekDay = this.getNearestWeekDay(i);
      nearestWeekDay.setHours(
        this.getHour(entry.hour),
        this.getMinutes(entry.hour),
        0, // seconds
      );

      // Alarms need different names
      // so we differentiate them with the week day number
      this.createAlarm(`${entry.url} weekDay:${i}`, nearestWeekDay.getTime());
    }
  }

  // Solution by Tim
  // https://stackoverflow.com/questions/1579010/get-next-date-from-weekday-in-javascript
  static getNearestWeekDay(weekDayNumber) {
    let result = new Date();
    result.setDate(result.getDate() + (weekDayNumber + (7 - result.getDay())) % 7);
    return result;
  }

  static createAlarm(url, date) {
    let alarmInfo = {};
    alarmInfo.when = date;
    alarmInfo.periodInMinutes = 10080; // every week
    chrome.alarms.create(url, alarmInfo);
  }

  static getHour(time) {
    return parseInt(time.split(":")[0]);
  }

  static getMinutes(time) {
    return parseInt(time.split(":")[1]);
  }
}

export default Schedule;

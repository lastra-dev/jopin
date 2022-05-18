/*global chrome*/

import WeekDay from "../helpers/WeekDay";
import Formatters from "../helpers/Formatters";
import ScheduleStorage from "../controllers/ScheduleStorage";

class Alarms {
  static create(schedule) {
    for (let i = 0; i < schedule.days.length; i++) {
      if (schedule.days[i] === 0) {
        continue;
      }
      let nearestWeekDayDate = WeekDay.getDateOfNearestWeekDay(i);
      nearestWeekDayDate.setHours(
        Formatters.timeToHour(schedule.time),
        Formatters.timeToMinutes(schedule.time),
        0 // seconds
      );

      const notifyMode = localStorage.getItem("notify");
      // Alarms need different names
      // so we differentiate them with the week day number
      this.createAlarm(
        `${schedule.url} notify: ${notifyMode} name: ${schedule.name} weekDay: ${i}`,
        nearestWeekDayDate.getTime()
      );
    }
  }

  static createAll(schedules) {
    schedules.forEach((schedule) => {
      this.create(schedule);
    });
  }

  static edit(id, schedule) {
    const oldSchedule = ScheduleStorage.get(id);
    this.delete(oldSchedule);
    this.create(schedule);
  }

  static delete(schedule) {
    for (let i = 0; i < schedule.days.length; i++) {
      if (schedule.days[i] === 0) {
        continue;
      }

      const notifyMode = localStorage.getItem("notify");
      chrome.alarms.clear(
        `${schedule.url} notify: ${notifyMode} name: ${schedule.name} weekDay: ${i}`
      );
    }
  }

  static deleteAll() {
    chrome.alarms.clearAll();
  }

  static createAlarm(url, date) {
    let alarmInfo = {};
    alarmInfo.when = date;
    alarmInfo.periodInMinutes = 10080; // every week
    chrome.alarms.create(url, alarmInfo);
  }
}

export default Alarms;

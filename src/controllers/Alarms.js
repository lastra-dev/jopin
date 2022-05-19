/*global chrome*/

import WeekDay from "../helpers/WeekDay";
import Formatters from "../helpers/Formatters";
import ScheduleStorage from "../controllers/ScheduleStorage";

class Alarms {
  static create(schedule) {
    for (let i = 0; i < schedule.days.length; i++) {
      if (schedule.days[i] !== 1) {
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
        `${schedule.name}|${schedule.url}|${notifyMode}|${i}`,
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
        `${schedule.name}|${schedule.url}|${notifyMode}|${i}`
      );
    }
  }

  static createSingle(day, schedule) {
    const dayNumber = WeekDay.weekDayToNumber(day);
    const notifyMode = localStorage.getItem("notify");
    this.createAlarm(
      `${schedule.name}|${schedule.url}|${notifyMode}|${dayNumber}`,
      WeekDay.getDateOfNearestWeekDay(day).getTime()
    );
  }

  static deleteSingle(day, schedule) {
    const dayNumber = WeekDay.weekDayToNumber(day);
    const notifyMode = localStorage.getItem("notify");
    chrome.alarms.clear(
      `${schedule.name}|${schedule.url}|${notifyMode}|${dayNumber}`
    );
  }

  static deleteAll() {
    chrome.alarms.clearAll();
  }

  static createAlarm(data, date) {
    let alarmInfo = {};
    alarmInfo.when = date;
    alarmInfo.periodInMinutes = 10080; // every week
    chrome.alarms.create(data, alarmInfo);
  }
}

export default Alarms;

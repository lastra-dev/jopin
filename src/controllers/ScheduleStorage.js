import Schedule from "../models/Schedule";
import WeekDay from "../helpers/WeekDay";

class ScheduleStorage {
  static set(schedule) {
    if (!(schedule instanceof Schedule)) {
      throw Error("Error: Expected an object instanceof Schedule.");
    }

    const jsonSchedule = JSON.stringify(schedule);
    localStorage.setItem(schedule.id, jsonSchedule);
  }

  static setAll(schedules) {
    schedules.forEach((schedule) => {
      this.set(schedule);
    });
  }

  static get(id) {
    try {
      const jsonSchedule = localStorage.getItem(id);
      return Schedule.fromJson(jsonSchedule);
    } catch {
      throw Error("Received object is not a Schedule.");
    }
  }

  static getAll() {
    let schedules = [];
    const keys = Object.keys(localStorage);

    keys.forEach((key) => {
      try {
        const schedule = this.get(key);
        schedules.push(schedule);
      } catch {}
    });

    const result = this.sortByTime(schedules);
    return result;
  }

  static getAllFromWeekDay(weekDay) {
    let result = [];
    const weekDayNumber = WeekDay.weekDayToNumber(weekDay);
    const schedules = this.getAll();
    schedules.forEach((schedule) => {
      if (schedule.days[weekDayNumber] !== 0) {
        result.push(schedule);
      }
    });
    return result;
  }

  static sortByTime(schedules) {
    schedules.sort((a, b) => {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    });
    return schedules;
  }

  static delete(id) {
    try {
      this.get(id);
    } catch (notASchedule) {
      throw notASchedule;
    }
    localStorage.removeItem(id);
  }

  static clear() {
    const keys = Object.keys(localStorage);

    keys.forEach((key) => {
      try {
        this.delete(key);
      } catch {}
    });
  }

  static toggle(id, weekDay) {
    const schedule = this.get(id);
    const weekDayNumber = WeekDay.weekDayToNumber(weekDay);
    schedule.daysEnabled[weekDayNumber] = !schedule.daysEnabled[weekDayNumber];
    this.set(schedule);
  }
}

export default ScheduleStorage;

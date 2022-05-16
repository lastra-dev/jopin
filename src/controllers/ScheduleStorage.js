import Schedule from "../models/Schedule";
import WeekDay from "../helpers/WeekDay";

class ScheduleStorage {
  static add(schedule) {
    if (!(schedule instanceof Schedule)) {
      throw Error("Error: Expected an object instanceof Entry.");
    }

    const jsonEntry = JSON.stringify(schedule);
    localStorage.setItem(schedule.id, jsonEntry);

    return schedule.id;
  }

  static addAll(schedules) {
    schedules.forEach(schedule => {
      this.add(schedule);
    });
  }

  static get(id) {
    const jsonEntry = localStorage.getItem(id);
    if (!jsonEntry) {
      throw Error("Error: Fetched object with this ID does not exists.");
    }
    try {
      const schedule = Schedule.fromJson(jsonEntry);
      return schedule;
    } catch {
      throw Error("Error: Fetched object is not instanceof Entry.");
    }
  }

  static getAll() {
    let entries = [];
    const keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
      try {
        const schedule = this.get(keys[i]);
        entries.push(schedule);
      } catch { }
    }

    const result = this.sortByTime(entries);
    return result;
  }

  static getAllFromWeekDay(weekDay) {
    let result = [];
    const weekDayNumber = WeekDay.weekDayToNumber(weekDay);
    const entries = this.getAll();
    entries.forEach((schedule) => {
      if (schedule.days[weekDayNumber] === 1) {
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
    } catch (notAnEntryError) {
      throw notAnEntryError;
    }
    localStorage.removeItem(id);
  }

  static edit(schedule) {
    this.get(schedule.id);
    if (!(schedule instanceof Schedule)) {
      throw Error("Error: Object given is not Entry");
    }

    const jsonEntry = JSON.stringify(schedule);
    localStorage.setItem(schedule.id, jsonEntry);
  }

  static clear() {
    const keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
      try {
        this.delete(keys[i]);
      } catch { }
    }
  }

  static toggle(id) {
    const schedule = this.get(id);
    schedule.enabled = !schedule.enabled;
    this.edit(schedule);
  }
}

export default ScheduleStorage;

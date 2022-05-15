import Entry from "../models/Entry";
import WeekDay from "../helpers/WeekDay";

class EntryStorage {
  static add(entry) {
    if (!(entry instanceof Entry)) {
      throw "Error: Expected an object instanceof Entry.";
    }

    const jsonEntry = JSON.stringify(entry);
    localStorage.setItem(entry.id, jsonEntry);

    return entry.id;
  }

  static get(id) {
    const jsonEntry = localStorage.getItem(id);
    if (!jsonEntry) {
      throw "Error: Fetched object with this ID does not exists.";
    }
    try {
      const entry = Entry.fromJson(jsonEntry);
      return entry;
    } catch {
      throw "Error: Fetched object is not instanceof Entry.";
    }
  }

  static getAll() {
    let entries = [];
    const keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
      try {
        const entry = this.get(keys[i]);
        entries.push(entry);
      } catch { }
    }

    const result = this.sortByTime(entries);
    return result;
  }

  static getAllFromWeekDay(weekDay) {
    let result = [];
    const weekDayNumber = WeekDay.weekDayToNumber(weekDay);
    const entries = this.getAll();
    entries.forEach((entry) => {
      if (entry.days[weekDayNumber] === 1) {
        result.push(entry);
      }
    });
    return result;
  }

  static sortByTime(entries) {
    entries.sort((a, b) => {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    });
    return entries;
  }

  static delete(id) {
    try {
      this.get(id);
    } catch (notAnEntryError) {
      throw notAnEntryError;
    }
    localStorage.removeItem(id);
  }

  static edit(entry) {
    this.get(entry.id);
    if (!(entry instanceof Entry)) {
      throw "Error: Object given is not Entry";
    }

    const jsonEntry = JSON.stringify(entry);
    localStorage.setItem(entry.id, jsonEntry);
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
    const entry = this.get(id);
    entry.enabled = !entry.enabled;
    this.edit(entry);
  }
}

export default EntryStorage;

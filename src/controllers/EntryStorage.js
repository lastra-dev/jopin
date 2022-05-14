import Entry from "../models/Entry";
import WeekDay from "../helpers/WeekDay";

class EntryStorage {
  static add(entry) {
    if (!(entry instanceof Entry)) {
      throw "Error: Expected an object instanceof Entry.";
    }

    // NOTE: Use this until we get ID's from the DB.
    const id = Math.floor(Math.random() * 100).toString();
    entry.id = id;
    const jsonEntry = JSON.stringify(entry);
    localStorage.setItem(id, jsonEntry);

    return id;
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
      throw "Error: Fetched object is not instanceof Entry."
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

    const result = this.sortByTime(entries)
    return result;
  }

  static getAllFromWeekDay(weekDay) {
    let result = [];
    const weekDayNumber = WeekDay.weekDayToNumber(weekDay);
    const entries = this.getAll();
    entries.forEach(entry => {
      if (entry.days[weekDayNumber] === 1) {
        result.push(entry);
      }
    });
    return result;
  }

  static sortByTime(entries) {
    entries.sort((a, b) => {
      if (a.hour > b.hour) {
        return 1;
      }
      if (a.hour < b.hour) {
        return -1;
      }
      return 0;
    })
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

  static edit(id, entry) {
    this.get(id);
    if (!(entry instanceof Entry)) {
      throw "Error: Object given is not Entry"
    }

    const jsonEntry = JSON.stringify(entry);
    localStorage.setItem(id, jsonEntry);
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
    this.edit(id, entry);
  }
}

export default EntryStorage;

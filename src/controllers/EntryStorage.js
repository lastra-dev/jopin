import Entry from "../models/Entry";

class EntryStorage {
  static add(entry) {
    if (!(entry instanceof Entry)) {
      throw "Error: Expected an instanceof Entry.";
    }

    // NOTE: Use this until we get ID's from the DB.
    const id = Math.floor(Math.random() * 100).toString();
    const jsonEntry = JSON.stringify(entry);
    localStorage.setItem(id, jsonEntry);

    return id;
  }

  static get(id) {
    const jsonEntry = localStorage.getItem(id);
    if (!jsonEntry) {
      throw "Error: Entry with this ID does not exists.";
    }
    try {
      const entry = Entry.fromJson(jsonEntry);
      return entry;
    } catch {
      throw "Error: Object is not instanceof Entry."
    }
  }

  static getAll() {
    let result = [];
    const keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
      try {
        const entry = this.get(keys[i]);
        result.push(entry);
      } catch { }
    }

    return result;
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
    try {
      this.get(id);
    } catch (notAnEntryError) {
      throw notAnEntryError;
    }
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
}

export default EntryStorage;

import Entry from '../models/Entry'

class EntryStorage {
  static add(id, entry) {
    const jsonEntry = JSON.stringify(entry);
    localStorage.setItem(id, jsonEntry);
  }

  static get(id) {
    const jsonEntry = localStorage.getItem(id);
    const entry = Entry.fromJson(jsonEntry);
    return entry;
  }
}

export default EntryStorage;

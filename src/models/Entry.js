class Entry {
  constructor(name, url, hour, days) {
    this.name = name;
    this.url = url;
    this.hour = hour;
    this.days = days;
  }

  static fromJson(jsonEntry) {
    const entry = JSON.parse(jsonEntry);
    if (!entry.name || !entry.url || !entry.hour || !entry.days) {
      throw "Error: JSON Entry missing fields";
    }
    return new Entry(entry.name, entry.url, entry.hour, entry.days);
  }
}

export default Entry;

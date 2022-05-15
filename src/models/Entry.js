class Entry {
  constructor(name, url, time, days, enabled = true, id = null) {
    this.name = name;
    this.url = url;
    this.time = time;
    this.days = days;
    this.enabled = enabled;
    this.id = id;
  }

  static fromJson(jsonEntry) {
    const entry = JSON.parse(jsonEntry);
    if (
      !entry.hasOwnProperty('name') ||
      !entry.hasOwnProperty('url') ||
      !entry.hasOwnProperty('time') ||
      !entry.hasOwnProperty('days') ||
      !entry.hasOwnProperty('enabled') ||
      !entry.hasOwnProperty('id')
    ) {
      throw "Error: JSON Entry missing fields";
    }
    return new Entry(
      entry.name,
      entry.url,
      entry.time,
      entry.days,
      entry.enabled,
      entry.id
    );
  }
}

export default Entry;

class Entry {
  constructor(name, url, hour, days, enabled = true, id = null) {
    this.name = name;
    this.url = url;
    this.hour = hour;
    this.days = days;
    this.enabled = enabled;
    this.id = id;
  }

  static fromJson(jsonEntry) {
    const entry = JSON.parse(jsonEntry);
    if (
      !entry.name ||
      !entry.url ||
      !entry.hour ||
      !entry.days ||
      entry.enabled === null ||
      !entry.id
    ) {
      throw "Error: JSON Entry missing fields";
    }
    return new Entry(
      entry.name,
      entry.url,
      entry.hour,
      entry.days,
      entry.enabled,
      entry.id
    );
  }
}

export default Entry;

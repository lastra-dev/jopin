class Entry {
  constructor(name, url, hour, days, id = null) {
    this.name = name;
    this.url = url;
    this.hour = hour;
    this.days = days;
    this.id = id;
  }

  static fromJson(jsonEntry) {
    const entry = JSON.parse(jsonEntry);
    if (
      !entry.name ||
      !entry.url ||
      !entry.hour ||
      !entry.days ||
      !entry.id
    ) {
      throw "Error: JSON Entry missing fields";
    }
    return new Entry(
      entry.name,
      entry.url,
      entry.hour,
      entry.days,
      entry.id,
    );
  }
}

export default Entry;

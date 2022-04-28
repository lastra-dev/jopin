class Entry {
  constructor(id, name, URL, hour, days){
    this.id = id;
    this.name = name;
    this.URL = URL;
    this.hour = hour;
    this.days = days;
  }

  static fromJson(jsonEntry) {
    const entry = JSON.parse(jsonEntry);
    return new Entry(
      entry["id"],
      entry["name"],
      entry["URL"],
      entry["hour"],
      entry["days"],
    );
  }
}

export default Entry;

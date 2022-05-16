class Schedule {
  constructor(name, url, time, days, ownerId, enabled = true, id = null) {
    const daysValid = days.some(day => {
      return day === 1;
    });

    if (
      name === undefined ||
      url === undefined ||
      time === undefined ||
      daysValid === false ||
      ownerId === undefined ||
      name === "" ||
      url === "" ||
      time === "" ||
      ownerId === ""
    ) {
      throw Error("Missing properties");
    }
    this.name = name;
    this.url = url;
    this.time = time;
    this.days = days;
    this.ownerId = ownerId;
    this.enabled = enabled;
    this.id = id;
  }

  static fromJson(jsonSchedule) {
    const schedule = JSON.parse(jsonSchedule);
    if (
      !schedule.hasOwnProperty('name') ||
      !schedule.hasOwnProperty('url') ||
      !schedule.hasOwnProperty('time') ||
      !schedule.hasOwnProperty('days') ||
      !schedule.hasOwnProperty('ownerId') ||
      !schedule.hasOwnProperty('enabled') ||
      !schedule.hasOwnProperty('id')
    ) {
      throw Error("Error: JSON Entry missing fields");
    }
    return new Schedule(
      schedule.name,
      schedule.url,
      schedule.time,
      schedule.days,
      schedule.ownerId,
      schedule.enabled,
      schedule.id
    );
  }
}

export default Schedule;

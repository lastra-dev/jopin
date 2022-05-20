class Schedule {
  constructor(schedule) {
    const daysValid = schedule.days.some((day) => {
      return day === 1;
    });

    if (
      !daysValid ||
      schedule.url === "" ||
      schedule.time === "" ||
      schedule.name === "" ||
      schedule.ownerId === "" ||
      schedule.name === undefined ||
      schedule.url === undefined ||
      schedule.time === undefined ||
      schedule.ownerId === undefined
    ) {
      throw Error("Missing properties");
    }
    this.name = schedule.name;
    this.url = schedule.url;
    this.time = schedule.time;
    this.days = schedule.days;
    this.daysEnabled = schedule.daysEnabled;
    this.ownerId = schedule.ownerId;
    this.enabled = schedule.enabled;
    this.id = schedule.id;
  }

  static fromJson(jsonSchedule) {
    return new Schedule(JSON.parse(jsonSchedule));
  }
}

export default Schedule;

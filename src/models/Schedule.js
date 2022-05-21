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

    const daysEnabled = createEnabledDays(schedule.days);

    this.name = schedule.name;
    this.url = schedule.url;
    this.time = schedule.time;
    this.days = schedule.days;
    this.daysEnabled = schedule.daysEnabled || daysEnabled;
    this.ownerId = schedule.ownerId;
    this.id = schedule.id;
  }

  static fromJson(jsonSchedule) {
    return new Schedule(JSON.parse(jsonSchedule));
  }
}

export const createEnabledDays = (days) => {
  let result = [false, false, false, false, false, false, false];
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    if (day === 1) {
      result[i] = true;
    }
  }
  return result;
};

export const updateEnabledDays = (daysEnabled, oldDays, newDays) => {
  for (let i = 0; i < daysEnabled.length; i++) {
    if (oldDays[i] === 0 && newDays[i] === 1) {
      daysEnabled[i] = true;
    } else if (oldDays[i] === 1 && newDays[i] === 0) {
      daysEnabled[i] = false;
    }
  }
  return daysEnabled;
};

export default Schedule;

class Formatters {
  static formatTime(time) {
    const hour = parseInt(time.slice(0, 2));
    if (hour === 0) {
      time = `12:${time.slice(3, 5)} am` // 12:00 am
    }
    else if (hour < 12) {
      time = `${time} am`; // 11:59 am
    }
    else if (hour === 12) {
      time = `${time} pm`; // 12:00 pm
    }
    else if (hour >= 22) {
      time = `${hour - 12}:${time.slice(3, 5)} pm`; // 10:00 pm
    }
    else {
      time = `0${hour - 12}:${time.slice(3, 5)} pm` // 05:00 pm
    }
    return time;
  }

  static timeToHour(time) {
    return parseInt(time.split(":")[0]);
  }

  static timeToMinutes(time) {
    return parseInt(time.split(":")[1]);
  }
}

export default Formatters;

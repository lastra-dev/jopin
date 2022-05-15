class WeekDay {
  // By Gabriel Kohen
  // https://stackoverflow.com/questions/9677757/how-to-get-the-day-of-the-week-from-the-day-number-in-javascript
  static getCurrentWeekDay() {
    return new Date().toLocaleString("en-us", { weekday: "long" });
  }

  static nextWeekDay(weekDay) {
    switch (weekDay) {
      case "Sunday":
        return "Monday";
      case "Monday":
        return "Tuesday";
      case "Tuesday":
        return "Wednesday";
      case "Wednesday":
        return "Thursday";
      case "Thursday":
        return "Friday";
      case "Friday":
        return "Saturday";
      case "Saturday":
        return "Sunday";
      default:
        break;
    }
  }

  static previousWeekDay(weekDay) {
    switch (weekDay) {
      case "Sunday":
        return "Saturday";
      case "Monday":
        return "Sunday";
      case "Tuesday":
        return "Monday";
      case "Wednesday":
        return "Tuesday";
      case "Thursday":
        return "Wednesday";
      case "Friday":
        return "Thursday";
      case "Saturday":
        return "Friday";
      default:
        break;
    }
  }

  static weekDayToNumber(weekDay) {
    switch (weekDay) {
      case "Sunday":
        return 0;
      case "Monday":
        return 1;
      case "Tuesday":
        return 2;
      case "Wednesday":
        return 3;
      case "Thursday":
        return 4;
      case "Friday":
        return 5;
      case "Saturday":
        return 6;
      default:
        break;
    }
  }
}

export default WeekDay;

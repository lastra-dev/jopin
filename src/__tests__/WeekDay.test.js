import WeekDay from "../helpers/WeekDay";

beforeAll(() => {
  jest.useFakeTimers("modern");
});

test("Expect to get the week day number", () => {
  expect(WeekDay.weekDayToNumber("Sunday")).toBe(0);
  expect(WeekDay.weekDayToNumber("Monday")).toBe(1);
  expect(WeekDay.weekDayToNumber("Tuesday")).toBe(2);
  expect(WeekDay.weekDayToNumber("Wednesday")).toBe(3);
  expect(WeekDay.weekDayToNumber("Thursday")).toBe(4);
  expect(WeekDay.weekDayToNumber("Friday")).toBe(5);
  expect(WeekDay.weekDayToNumber("Saturday")).toBe(6);
});

test("Expect to get week day from week day number", () => {
  jest.setSystemTime(new Date("December 28, 2000 22:50:00")); // Thursday
  expect(WeekDay.getCurrentWeekDay()).toBe("Thursday");

  jest.setSystemTime(new Date("December 29, 2000 22:50:00")); // Thursday
  expect(WeekDay.getCurrentWeekDay()).toBe("Friday");

  jest.setSystemTime(new Date("December 30, 2000 22:50:00")); // Thursday
  expect(WeekDay.getCurrentWeekDay()).toBe("Saturday");

  jest.setSystemTime(new Date("December 31, 2000 22:50:00")); // Thursday
  expect(WeekDay.getCurrentWeekDay()).toBe("Sunday");

  jest.setSystemTime(new Date("January 01, 2001 22:50:00")); // Thursday
  expect(WeekDay.getCurrentWeekDay()).toBe("Monday");

  jest.setSystemTime(new Date("January 02, 2001 22:50:00")); // Thursday
  expect(WeekDay.getCurrentWeekDay()).toBe("Tuesday");

  jest.setSystemTime(new Date("January 03, 2001 22:50:00")); // Thursday
  expect(WeekDay.getCurrentWeekDay()).toBe("Wednesday");
});

test("Expect to get the next week day from given week day", () => {
  expect(WeekDay.nextWeekDay("Sunday")).toBe("Monday");
  expect(WeekDay.nextWeekDay("Monday")).toBe("Tuesday");
  expect(WeekDay.nextWeekDay("Tuesday")).toBe("Wednesday");
  expect(WeekDay.nextWeekDay("Wednesday")).toBe("Thursday");
  expect(WeekDay.nextWeekDay("Thursday")).toBe("Friday");
  expect(WeekDay.nextWeekDay("Friday")).toBe("Saturday");
  expect(WeekDay.nextWeekDay("Saturday")).toBe("Sunday");
});

test("Expect to get the previous week day from given week day", () => {
  expect(WeekDay.previousWeekDay("Sunday")).toBe("Saturday");
  expect(WeekDay.previousWeekDay("Monday")).toBe("Sunday");
  expect(WeekDay.previousWeekDay("Tuesday")).toBe("Monday");
  expect(WeekDay.previousWeekDay("Wednesday")).toBe("Tuesday");
  expect(WeekDay.previousWeekDay("Thursday")).toBe("Wednesday");
  expect(WeekDay.previousWeekDay("Friday")).toBe("Thursday");
  expect(WeekDay.previousWeekDay("Saturday")).toBe("Friday");
});

test("Expect to get the nearest date for the given week day", () => {
  jest.setSystemTime(new Date("December 28, 2000 22:50:00")); // Thursday
  // 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
  expect(WeekDay.getDateOfNearestWeekDay(4)).toStrictEqual(
    new Date("December 28, 2000 22:50:00")
  );
  expect(WeekDay.getDateOfNearestWeekDay(5)).toStrictEqual(
    new Date("December 29, 2000 22:50:00")
  );
  expect(WeekDay.getDateOfNearestWeekDay(6)).toStrictEqual(
    new Date("December 30, 2000 22:50:00")
  );
  expect(WeekDay.getDateOfNearestWeekDay(0)).toStrictEqual(
    new Date("December 31, 2000 22:50:00")
  );
  expect(WeekDay.getDateOfNearestWeekDay(1)).toStrictEqual(
    new Date("January 01, 2001 22:50:00")
  );
  expect(WeekDay.getDateOfNearestWeekDay(2)).toStrictEqual(
    new Date("January 02, 2001 22:50:00")
  );
  expect(WeekDay.getDateOfNearestWeekDay(3)).toStrictEqual(
    new Date("January 03, 2001 22:50:00")
  );
});

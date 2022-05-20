import Schedule from "../models/Schedule";
import ScheduleStorage from "../controllers/ScheduleStorage";

const testSchedule = new Schedule({
  name: "foo",
  url: "https://google.com",
  time: "17:00",
  days: [1, 0, 0, 1, 1, 0, 0],
  daysEnabled: [true, false, false, true, true, false, false],
  ownerId: "ownerId",
  id: "0",
});

const testSchedule2 = new Schedule({
  name: "bar",
  url: "https://google.com",
  time: "18:00",
  days: [0, 1, 0, 1, 0, 1, 0],
  daysEnabled: [false, true, false, true, false, false, false],
  ownerId: "ownerId",
  id: "1",
});

test("Expect [toggle] to enable or disable a Schedule", () => {
  ScheduleStorage.set(testSchedule);
  ScheduleStorage.set(testSchedule2);
  ScheduleStorage.toggle(testSchedule.id, "Sunday");
  ScheduleStorage.toggle(testSchedule2.id, "Friday");
  expect(ScheduleStorage.get(testSchedule.id).daysEnabled[0]).toBe(false);
  expect(ScheduleStorage.get(testSchedule2.id).daysEnabled[5]).toBe(true);
});

test("Expect [toggle] to throw an Error when invalid ID", () => {
  expect(() => {
    ScheduleStorage.toggle("Not a valid Schedule");
  }).toThrow();
});

test("Expect [get] to receive a Schedule from localStorage", () => {
  ScheduleStorage.set(testSchedule);
  expect(ScheduleStorage.get(testSchedule.id)).toStrictEqual(testSchedule);
});

test("Expect [get] to throw when getting an object different than Schedule", () => {
  localStorage.setItem("notAnSchedule", "This is not an Schedule");
  expect(() => {
    ScheduleStorage.get("notAnSchedule");
  }).toThrow();
});

test("Expect [getAll] to receive a list with all schedules", () => {
  ScheduleStorage.clear();
  ScheduleStorage.set(testSchedule);
  ScheduleStorage.set(testSchedule2);
  const testSchedules = [testSchedule, testSchedule2];
  expect(ScheduleStorage.getAll()).toStrictEqual(testSchedules);
});

test("Expect [delete] to delete a Schedule", () => {
  ScheduleStorage.set(testSchedule);
  ScheduleStorage.delete(testSchedule.id);
  expect(localStorage.getItem(testSchedule.id)).toBeNull();
});

test("Expect [delete] to throw when id is not a Schedule", () => {
  expect(() => {
    ScheduleStorage.delete("Non existing schedule");
  }).toThrow();
});

test("Expect [edit] to throw if given invalid Schedule", () => {
  ScheduleStorage.set(testSchedule);
  expect(() => {
    ScheduleStorage.edit(testSchedule.id, "Not a valid Schedule");
  }).toThrow();
});

test("Expect [edit] to throw if editing an object that is not Schedule", () => {
  localStorage.setItem("notASchedule", "This is not a Schedule");
  expect(() => {
    ScheduleStorage.edit("notASchedule", testSchedule2);
  }).toThrow();
});

test("Expect [clear] to clear all schedules", () => {
  ScheduleStorage.set(testSchedule);
  ScheduleStorage.clear();
  const testSchedules = ScheduleStorage.getAll();
  expect(testSchedules).toStrictEqual([]);
});

test("Expect to get all from given week day", () => {
  ScheduleStorage.clear();
  ScheduleStorage.set(testSchedule);
  ScheduleStorage.set(testSchedule2);
  expect(ScheduleStorage.getAllFromWeekDay("Sunday")).toStrictEqual([
    testSchedule,
  ]);
  expect(ScheduleStorage.getAllFromWeekDay("Monday")).toStrictEqual([
    testSchedule2,
  ]);
  expect(ScheduleStorage.getAllFromWeekDay("Tuesday")).toStrictEqual([]);
  expect(ScheduleStorage.getAllFromWeekDay("Wednesday")).toStrictEqual([
    testSchedule,
    testSchedule2,
  ]);
});

test("Expect to sort schedules by time", () => {
  expect(
    ScheduleStorage.sortByTime([testSchedule2, testSchedule])
  ).toStrictEqual([testSchedule, testSchedule2]);
});

test("Expect [setAll] to add all schedules", () => {
  const testSchedules = [testSchedule, testSchedule2];
  ScheduleStorage.clear();
  ScheduleStorage.setAll(testSchedules);
  expect(ScheduleStorage.getAll()).toStrictEqual(testSchedules);
});

import Schedule from "../models/Schedule";
import ScheduleStorage from "../controllers/ScheduleStorage";

const testSchedule = new Schedule(
  "foo",
  "https://google.com",
  "17:00",
  [1, 0, 0, 1, 1, 0, 0],
  "ownerId",
  true,
  "0"
);
const testSchedule2 = new Schedule(
  "bar",
  "https://google.com",
  "18:00",
  [0, 1, 0, 0, 1, -1, 1],
  "ownerId",
  false,
  "1"
);

test("Expect [toggle] to enable or disable a Schedule", () => {
  ScheduleStorage.add(testSchedule);
  ScheduleStorage.add(testSchedule2);
  ScheduleStorage.toggle(testSchedule.id, "Sunday");
  ScheduleStorage.toggle(testSchedule2.id, "Friday");
  expect(ScheduleStorage.get(testSchedule.id).days[0]).toBe(-1);
  expect(ScheduleStorage.get(testSchedule2.id).days[5]).toBe(1);
});

test("Expect [toggle] to throw an Error when invalid ID", () => {
  expect(() => {
    ScheduleStorage.toggle("Not a valid Schedule");
  }).toThrow();
});

test("Expect [add] to save a json Schedule in localStorage", () => {
  expect(typeof ScheduleStorage.add(testSchedule)).toBe("string");
});

test("Expect [add] to throw when not a Schedule", () => {
  const notASchedule = "This is not a Schedule";
  expect(() => {
    ScheduleStorage.add(notASchedule);
  }).toThrow();
});

test("Expect [get] to receive a Schedule from localStorage", () => {
  ScheduleStorage.add(testSchedule);
  expect(ScheduleStorage.get(testSchedule.id)).toStrictEqual(testSchedule);
});

test("Expect [get] to throw when Schedule doesn't exists", () => {
  expect(() => {
    ScheduleStorage.get("Non existing schedule");
  }).toThrow();
});

test("Expect [get] to throw when getting an object different than Schedule", () => {
  localStorage.setItem("notAnSchedule", "This is not an Schedule");
  expect(() => {
    ScheduleStorage.get("notAnSchedule");
  }).toThrow();
});

test("Expect [getAll] to receive a list with all schedules", () => {
  ScheduleStorage.clear();
  ScheduleStorage.add(testSchedule);
  ScheduleStorage.add(testSchedule2);
  const testSchedules = [testSchedule, testSchedule2];
  expect(ScheduleStorage.getAll()).toStrictEqual(testSchedules);
});

test("Expect [delete] to delete a Schedule", () => {
  ScheduleStorage.add(testSchedule);
  ScheduleStorage.delete(testSchedule.id);
  expect(localStorage.getItem(testSchedule.id)).toBeNull();
});

test("Expect [delete] to throw when id is not a Schedule", () => {
  expect(() => {
    ScheduleStorage.delete("Non existing schedule");
  }).toThrow();
});

test("Expect [edit] to edit a Schedule", () => {
  ScheduleStorage.add(testSchedule);

  const testEditSchedule = testSchedule;
  testEditSchedule.name = "bar";

  ScheduleStorage.edit(testEditSchedule);

  const editedSchedule = ScheduleStorage.get(testSchedule.id);
  expect(editedSchedule).toStrictEqual(testEditSchedule);
  expect(editedSchedule.name).toBe("bar");
});

test("Expect [edit] to throw if Schedule does not exists", () => {
  expect(() => {
    ScheduleStorage.edit("Not an existing Schedule", testSchedule);
  }).toThrow();
});

test("Expect [edit] to throw if given invalid Schedule", () => {
  ScheduleStorage.add(testSchedule);
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
  ScheduleStorage.add(testSchedule);
  ScheduleStorage.clear();
  const testSchedules = ScheduleStorage.getAll();
  expect(testSchedules).toStrictEqual([]);
});

test("Expect to get all from given week day", () => {
  ScheduleStorage.clear();
  ScheduleStorage.add(testSchedule);
  ScheduleStorage.add(testSchedule2);
  expect(ScheduleStorage.getAllFromWeekDay("Sunday")).toStrictEqual([
    testSchedule,
  ]);
  expect(ScheduleStorage.getAllFromWeekDay("Wednesday")).toStrictEqual([
    testSchedule,
  ]);
  expect(ScheduleStorage.getAllFromWeekDay("Monday")).toStrictEqual([
    testSchedule2,
  ]);
  expect(ScheduleStorage.getAllFromWeekDay("Saturday")).toStrictEqual([
    testSchedule2,
  ]);
  expect(ScheduleStorage.getAllFromWeekDay("Thursday")).toStrictEqual([
    testSchedule,
    testSchedule2,
  ]);
});

test("Expect to sort schedules by time", () => {
  expect(
    ScheduleStorage.sortByTime([testSchedule2, testSchedule])
  ).toStrictEqual([testSchedule, testSchedule2]);
});

test("Expect to add all schedules", () => {
  const testSchedules = [testSchedule, testSchedule2];
  ScheduleStorage.clear();
  ScheduleStorage.addAll(testSchedules);
  expect(ScheduleStorage.getAll()).toStrictEqual(testSchedules);
});

test("Expect to get schedule from week day enabled or not.", () => {
  const testSchedules = [testSchedule, testSchedule2];
  ScheduleStorage.addAll(testSchedules);
  expect(ScheduleStorage.getWeekDayEnabled(testSchedule.id, "Sunday")).toBe(true);
  expect(ScheduleStorage.getWeekDayEnabled(testSchedule2.id, "Friday")).toBe(false);
});

import Schedule from "../models/Schedule";

const testSchedule = new Schedule(
  "foo",
  "https://google.com",
  "17:00",
  [1, 1, 1, 0, 0, 0, 0],
  "ownerId",
  true,
  "id"
);

test("Expect [fromJson] to return a Schedule model", () => {
  const jsonTestSchedule = JSON.stringify(testSchedule);
  expect(Schedule.fromJson(jsonTestSchedule)).toStrictEqual(testSchedule);
});

test("Expect [fromJson] to throw when JSON fields are incomplete", () => {
  const invalidSchedule = { name: "Not a valid Schedule" };
  const jsonInvalidSchedule = JSON.stringify(invalidSchedule);
  expect(() => {
    Schedule.fromJson(jsonInvalidSchedule);
  }).toThrow();
});

test("Expect to throw error when constructor don't have all required properties", () => {
  expect(() => {
    new Schedule("Invalid Schedule", "abc", "abc", [0, 0, 0, 0, 0, 0, 0], "0");
  }).toThrow();
  expect(() => {
    new Schedule("Invalid Schedule", "", "", [1, 0, 0, 0, 0, 0, 0], "0");
  }).toThrow();
});

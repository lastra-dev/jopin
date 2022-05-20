import Schedule from "../models/Schedule";

const testSchedule = new Schedule({
  name: "foo",
  url: "https://google.com",
  time: "17:00",
  days: [1, 1, 1, 0, 0, 0, 0],
  daysEnabled: [true, true, false, false, false, false, false],
  ownerId: "ownerId",
  id: "id",
});

test("Expect [fromJson] to return a Schedule model", () => {
  const jsonTestSchedule = JSON.stringify(testSchedule);
  expect(Schedule.fromJson(jsonTestSchedule)).toStrictEqual(testSchedule);
});

test("Expect [Schedule] to throw Error when missing properties", () => {
  // Non active days
  expect(() => {
    new Schedule({
      name: "Invalid Schedule",
      url: "https://google.com",
      time: "17:00",
      days: [0, 0, 0, 0, 0, 0, 0],
      daysEnabled: [false, false, false, false, false, false, false],
      ownerId: "ownerId",
      id: "id",
    });
  }).toThrow();

  // Empty properties
  expect(() => {
    new Schedule({
      name: "Invalid Schedule",
      url: "",
      time: "",
      days: [1, 0, 0, 0, 0, 0, 0],
      daysEnabled: [true, false, false, false, false, false, false],
      ownerId: "ownerId",
      id: "id",
    });
  }).toThrow();

  // Missing name
  expect(() => {
    new Schedule({
      url: "",
      time: "",
      days: [1, 0, 0, 0, 0, 0, 0],
      daysEnabled: [true, false, false, false, false, false, false],
      ownerId: "ownerId",
      id: "id",
    });
  }).toThrow();
});

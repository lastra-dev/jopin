import Entry from "../models/Entry";

const testEntry = new Entry(
  "foo",
  "https://google.com",
  "17:00",
  [1, 1, 1, 0, 0, 0, 0],
  "ownerId",
  true,
  "id"
);

test("Expect [fromJson] to return an Entry model", () => {
  const jsonTestEntry = JSON.stringify(testEntry);
  expect(Entry.fromJson(jsonTestEntry)).toStrictEqual(testEntry);
});

test("Expect [fromJson] to throw when JSON fields are incomplete", () => {
  const invalidEntry = { name: "Not a valid Entry" };
  const jsonInvalidEntry = JSON.stringify(invalidEntry);
  expect(() => {
    Entry.fromJson(jsonInvalidEntry);
  }).toThrow();
});

test("Expect to throw error when constructor don't have all required properties", () => {
  expect(() => {
    new Entry("Invalid Entry", "abc", "abc", [0, 0, 0, 0, 0, 0, 0], "0");
  }).toThrow();
  expect(() => {
    new Entry("Invalid Entry", "", "", [1, 0, 0, 0, 0, 0, 0], "0");
  }).toThrow();
});

import Entry from "../models/Entry";

const testEntry = new Entry(
  "foo",
  "https://google.com",
  "17:00",
  [1, 1, 1, 0, 0, 0, 0],
  true,
  "0"
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

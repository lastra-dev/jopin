import Entry from "../models/Entry";
import EntryStorage from "../controllers/EntryStorage";

const testEntry = new Entry(
  "foo",
  "https://google.com",
  "17:00",
  [1, 0, 0, 1, 1, 0, 0],
  "ownerId",
  true,
  "0"
);
const testEntry2 = new Entry(
  "bar",
  "https://google.com",
  "18:00",
  [0, 1, 0, 0, 1, 0, 1],
  "ownerId",
  false,
  "1"
);

test("Expect [toggle] to enable or disable an Entry", () => {
  EntryStorage.add(testEntry);
  EntryStorage.toggle(testEntry.id);
  expect(EntryStorage.get(testEntry.id).enabled).toBe(!testEntry.enabled);
});

test("Expect [toggle] to throw an Error when invalid ID", () => {
  expect(() => {
    EntryStorage.toggle("Not a valid Entry");
  }).toThrow();
});

test("Expect [add] to save a json Entry in localStorage", () => {
  expect(typeof EntryStorage.add(testEntry)).toBe("string");
});

test("Expect [add] to throw when not an Entry", () => {
  const notAnEntry = "This is not an Entry";
  expect(() => {
    EntryStorage.add(notAnEntry);
  }).toThrow();
});

test("Expect [get] to recieve an Entry from localStorage", () => {
  EntryStorage.add(testEntry);
  expect(EntryStorage.get(testEntry.id)).toStrictEqual(testEntry);
});

test("Expect [get] to throw when Entry doesn't exists", () => {
  expect(() => {
    EntryStorage.get("Non existing entry");
  }).toThrow();
});

test("Expect [get] to throw when getting an object different than Entry", () => {
  localStorage.setItem("notAnEntry", "This is not an Entry");
  expect(() => {
    EntryStorage.get("notAnEntry");
  }).toThrow();
});

test("Expect [getAll] to recieve a list with all entries", () => {
  EntryStorage.clear();
  EntryStorage.add(testEntry);
  EntryStorage.add(testEntry2);
  const testEntries = [testEntry, testEntry2];
  expect(EntryStorage.getAll()).toStrictEqual(testEntries);
});

test("Expect [delete] to delete an Entry", () => {
  EntryStorage.add(testEntry);
  EntryStorage.delete(testEntry.id);
  expect(localStorage.getItem(testEntry.id)).toBeNull();
});

test("Expect [delete] to throw when id is not an Entry", () => {
  expect(() => {
    EntryStorage.delete("Non existing entry");
  }).toThrow();
});

test("Expect [edit] to edit an Entry", () => {
  EntryStorage.add(testEntry);

  const testEditEntry = testEntry;
  testEditEntry.name = "bar";

  EntryStorage.edit(testEditEntry);

  const editedEntry = EntryStorage.get(testEntry.id);
  expect(editedEntry).toStrictEqual(testEditEntry);
  expect(editedEntry.name).toBe("bar");
});

test("Expect [edit] to throw if Entry does not exists", () => {
  expect(() => {
    EntryStorage.edit("Not an existing Entry", testEntry);
  }).toThrow();
});

test("Expect [edit] to throw if given invalid Entry", () => {
  EntryStorage.add(testEntry);
  expect(() => {
    EntryStorage.edit(testEntry.id, "Not a valid Entry");
  }).toThrow();
});

test("Expect [edit] to throw if editing an object that is not Entry", () => {
  localStorage.setItem("notAnEntry", "This is not an Entry");
  expect(() => {
    EntryStorage.edit("notAnEntry", testEntry2);
  }).toThrow();
});

test("Expect [clear] to clear all entries", () => {
  EntryStorage.add(testEntry);
  EntryStorage.clear();
  const testEntries = EntryStorage.getAll();
  expect(testEntries).toStrictEqual([]);
});

test("Expect to get all from given week day", () => {
  EntryStorage.clear();
  EntryStorage.add(testEntry);
  EntryStorage.add(testEntry2);
  expect(EntryStorage.getAllFromWeekDay("Sunday")).toStrictEqual([testEntry]);
  expect(EntryStorage.getAllFromWeekDay("Wednesday")).toStrictEqual([
    testEntry,
  ]);
  expect(EntryStorage.getAllFromWeekDay("Monday")).toStrictEqual([testEntry2]);
  expect(EntryStorage.getAllFromWeekDay("Saturday")).toStrictEqual([
    testEntry2,
  ]);
  expect(EntryStorage.getAllFromWeekDay("Thursday")).toStrictEqual([
    testEntry,
    testEntry2,
  ]);
});

test("Expect to sort entries by time", () => {
  expect(EntryStorage.sortByTime([testEntry2, testEntry])).toStrictEqual([
    testEntry,
    testEntry2,
  ]);
});

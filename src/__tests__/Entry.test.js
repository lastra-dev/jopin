import Entry from '../models/Entry'

const testEntry = new Entry(0, "foo", "https://google.com", "17:00", ["m", "t", "w"])
const jsonTestEntry = JSON.stringify(testEntry);

test('Expect to return an Entry model', () => {
  expect(Entry.fromJson(jsonTestEntry)).toStrictEqual(testEntry)
});

import Entry from '../models/Entry'
import EntryStorage from '../controllers/EntryStorage';

const testEntry = new Entry(0, "foo", "https://google.com", "17:00", ["m", "t", "w"])
const jsonTestEntry = JSON.stringify(testEntry);

beforeAll(() => {
  EntryStorage.add(0, testEntry);
})

test('Expect to save in localStorage', () => {
  expect(localStorage.getItem(0)).toBe(jsonTestEntry);
});

test('Expect to recieve an Entry from localStorage', () => {
  expect(EntryStorage.get(0)).toStrictEqual(testEntry);
});

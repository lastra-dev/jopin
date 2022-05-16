import Alarms from "../controllers/Alarms";

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date('December 28, 2000 22:50:00')) // Thursday
});

test("Expect to get the nearest date for the given week day", () => {
  // 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
  expect(Alarms.getDateOfNearestWeekDay(4)).toStrictEqual(new Date('December 28, 2000 22:50:00'))
  expect(Alarms.getDateOfNearestWeekDay(5)).toStrictEqual(new Date('December 29, 2000 22:50:00'))
  expect(Alarms.getDateOfNearestWeekDay(6)).toStrictEqual(new Date('December 30, 2000 22:50:00'))
  expect(Alarms.getDateOfNearestWeekDay(0)).toStrictEqual(new Date('December 31, 2000 22:50:00'))
  expect(Alarms.getDateOfNearestWeekDay(1)).toStrictEqual(new Date('January 01, 2001 22:50:00'))
  expect(Alarms.getDateOfNearestWeekDay(2)).toStrictEqual(new Date('January 02, 2001 22:50:00'))
  expect(Alarms.getDateOfNearestWeekDay(3)).toStrictEqual(new Date('January 03, 2001 22:50:00'))
});
import Formatters from "../helpers/Formatters";

test("Expect to format time correctly", () => {
  expect(Formatters.formatTime("00:30")).toBe("12:30 am");
  expect(Formatters.formatTime("01:15")).toBe("01:15 am");
  expect(Formatters.formatTime("11:59")).toBe("11:59 am");
  expect(Formatters.formatTime("12:00")).toBe("12:00 pm");
  expect(Formatters.formatTime("13:47")).toBe("01:47 pm")
  expect(Formatters.formatTime("23:59")).toBe("11:59 pm")
});

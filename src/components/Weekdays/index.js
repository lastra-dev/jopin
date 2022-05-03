import { WeekdaysInput } from "react-weekdays-input";

const Weekdays = (props) => {
  return (
    <>
      <p className={`label fs-300 ${props.className}`}>Days</p>
      <WeekdaysInput
        value={props.value}
        onChange={props.onChange}
        days={["MO", "TU", "WE", "TH", "FR", "SA", "SU"]}
        dayStyle={{
          padding: "4px 4.5px",
          margin: "4px",
          borderRadius: "6px",
          border: "1px solid #474747",
        }}
        activeDayStyle={{
          backgroundColor: "#474747",
          color: "white",
        }}
      />
    </>
  );
};

export default Weekdays;

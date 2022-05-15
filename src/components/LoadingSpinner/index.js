import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadingSpinner = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <center>
        <ClimbingBoxLoader color="hsl(var(--clr-amin))" size={20} />
      </center>
    </div>
  )
}

export default LoadingSpinner;

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadingSpinner = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <center>
        <ClimbingBoxLoader color="hsl(var(--clr-ibiza))" size={20} />
      </center>
    </div>
  )
}

export default LoadingSpinner;

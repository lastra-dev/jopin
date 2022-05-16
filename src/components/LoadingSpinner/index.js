import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import HashLoader from "react-spinners/HashLoader";

const BoxLoadingSpinner = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <center>
        <ClimbingBoxLoader color="hsl(var(--clr-ibiza))" size={20} />
      </center>
    </div>
  )
}

const HashSpinner = () => {
  return (
    <div style={{ marginTop: "250px" }}>
      <center>
        <HashLoader color="#F42D4B" size={50} />
      </center>
    </div>
  )
}

export { BoxLoadingSpinner, HashSpinner };

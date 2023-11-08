import Button from "@mui/material/Button";
import StepContext from "../../context/StepContext";

import "./index.css";

const SecondStep = () => (
  <StepContext.Consumer>
    {(val) => {
      const { nextStep, goBack, changePlan } = val;
      return (
        <div className="second-container">
          <p>Choose a plan</p>
          <div>
            <input
              type="radio"
              id="month"
              name="plan"
              value="month"
              onChange={(event) => changePlan(event.target.value)}
            />
            <label className="label">Month</label>
          </div>
          <br />
          <div>
            <input
              type="radio"
              id="month"
              name="plan"
              value="year"
              onChange={(event) => changePlan(event.target.value)}
            />
            <label className="label">Month</label>
          </div>
          <div className="btn-container">
            <Button variant="contained" onClick={() => goBack()}>
              Back
            </Button>
            <Button variant="contained" onClick={() => nextStep()}>
              Next
            </Button>
          </div>
        </div>
      );
    }}
  </StepContext.Consumer>
);

export default SecondStep;

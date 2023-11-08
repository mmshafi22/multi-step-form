import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContext from "../../context/StepContext";

import "./index.css";

const StepIndicator = () => (
  <StepContext.Consumer>
    {(val) => {
      const { step } = val;
      return (
        <div className="step-container">
          <Stepper
            style={{ width: "70%" }}
            activeStep={step}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
      );
    }}
  </StepContext.Consumer>
);

export default StepIndicator;

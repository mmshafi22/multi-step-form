import { Button, TextField } from "@mui/material";
import StepContext from "../../context/StepContext";

import "./index.css";

const FirstStep = () => (
  <StepContext.Consumer>
    {(val) => {
      const {
        fullName,
        lastName,
        gender,
        nextStep,
        changeFullName,
        changeLastName,
      } = val;
      return (
        <div className="first-step-container">
          <p>Your Info</p>
          <form className="form-first-step">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              width="100%"
              value={fullName}
              required
              onChange={(event) => changeFullName(event.target.value)}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              width="100%"
              value={lastName}
              required
              onChange={(event) => changeLastName(event.target.value)}
            />
          </form>
          <div className="btn-next" onClick={() => nextStep()}>
            <Button variant="contained">Next</Button>
          </div>
        </div>
      );
    }}
  </StepContext.Consumer>
);

export default FirstStep;

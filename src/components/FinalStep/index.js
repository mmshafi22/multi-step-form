import { Button, TextField } from "@mui/material";
import StepContext from "../../context/StepContext";

import "./index.css";

const FinalStep = () => (
  <StepContext.Consumer>
    {(val) => {
      const {
        gmail,
        phoneNumber,
        nextStep,
        changeEmail,
        changePhoneNumber,
        goBack,
      } = val;
      return (
        <div className="first-step-container">
          <p>Personal Information</p>
          <form className="form-first-step">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              width="100%"
              value={gmail}
              required
              onChange={(event) => changeEmail(event.target.value)}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              width="100%"
              value={phoneNumber}
              required
              onChange={(event) => changePhoneNumber(event.target.value)}
            />
          </form>
          <div className="btn-container">
            <Button variant="contained" onClick={() => goBack()}>
              Back
            </Button>
            <Button variant="contained" onClick={() => nextStep()}>
              Confirm
            </Button>
          </div>
        </div>
      );
    }}
  </StepContext.Consumer>
);

export default FinalStep;

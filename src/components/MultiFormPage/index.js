import StepContext from "../../context/StepContext";
import FirstStep from "../FirstStep";
import StepIndicator from "../StepIndicator";
import SecondStep from "../SecondStep";
import FinalStep from "../FinalStep";
import Success from "../Success";
import "./index.css";

const MultiFormPage = () => (
  <div className="multi-page-container">
    <h1 className="page-heading">Multi Step From Page</h1>
    <StepIndicator />
    <StepContext.Consumer>
      {(val) => {
        const { step } = val;
        switch (step) {
          case 0:
            return <FirstStep />;
          case 1:
            return <SecondStep />;
          case 2:
            return <FinalStep />;
          default:
            return <Success />;
        }
      }}
    </StepContext.Consumer>
  </div>
);

export default MultiFormPage;

import { Component } from "react";
import StepContext from "./context/StepContext";
import MultiFormPage from "./components/MultiFormPage";

import "./App.css";
class App extends Component {
  state = {
    step: 0,
    fullName: "",
    lastName: "",
    plan: "",
    gmail: "",
    phoneNumber: "",
  };

  nextStep = () => {
    this.setState((prev) => ({ step: prev.step + 1 }));
  };

  changeFullName = (val) => {
    this.setState({ fullName: val });
  };

  changeLastName = (val) => {
    this.setState({ lastName: val });
  };

  goBack = () => {
    this.setState((prev) => ({ step: prev.step - 1 }));
  };

  changeEmail = (val) => {
    this.setState({ gmail: val });
  };

  changePhoneNumber = (val) => {
    this.setState({ phoneNumber: val });
  };

  changePlan = (val) => {
    this.setState({ plan: val });
  };
  render() {
    const { step, fullName, lastName, plan, gmail, phoneNumber } = this.state;
    return (
      <StepContext.Provider
        value={{
          step,
          fullName,
          lastName,
          plan,
          gmail,
          phoneNumber,
          nextStep: this.nextStep,
          changeFullName: this.changeFullName,
          changeLastName: this.changeLastName,
          goBack: this.goBack,
          changePlan: this.changePlan,
          changeEmail: this.changeEmail,
          changePhoneNumber: this.changePhoneNumber,
        }}
      >
        <MultiFormPage />
      </StepContext.Provider>
    );
  }
}

export default App;

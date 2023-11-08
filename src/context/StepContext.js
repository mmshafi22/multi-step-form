import React from "react";

const StepContext = React.createContext({
  step: 0,
  fullName: "",
  lastName: "",
  plan: "",
  gmail: "",
  phoneNumber: "",
  nextStep: () => {},
  changeFullName: () => {},
  changeLastName: () => {},
  goBack: () => {},
  changePlan: () => {},
  changeEmail: () => {},
  changePhoneNumber: () => {},
});

export default StepContext;

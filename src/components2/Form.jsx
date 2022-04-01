import React, { useState } from "react";
import RequestNewBookForm from "./RequestNewBookForm";
import SignupFormSuccess from "./SignupFormSuccess";
const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <RequestNewBookForm submitForm={submitForm} />
      ) : (
        <SignupFormSuccess />
      )}
    </div>
  );
};
export default Form;

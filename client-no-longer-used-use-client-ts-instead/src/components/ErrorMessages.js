import React from "react";
import { StyledErrorBox, StyledLi } from "../styles/Forms";

const ErrorMessages = ({ errors }) => {
  const renderErrors = () => {
    return errors.map((error, index) => <StyledLi key={index}>{error}</StyledLi>);
  };

  // need box and error styling
  return <StyledErrorBox>{renderErrors()}</StyledErrorBox>;
};

export default ErrorMessages;

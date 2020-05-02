import React from "react";

const ErrorMessages = ({ errors }) => {
  const renderErrors = () => {
    return errors.map((error, index) => <li key={index}>{error}</li>);
  };

  // need box and error styling
  return <div>{renderErrors()}</div>;
};

export default ErrorMessages;

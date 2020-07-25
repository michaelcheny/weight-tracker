import React from "react";

const Errors = ({ errors }: any) => {
  return (
    <div className="error-container">
      {errors.map((error: any, index: number) => {
        return <p key={index}>{error}</p>;
      })}
    </div>
  );
};

export default Errors;

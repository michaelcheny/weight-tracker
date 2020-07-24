import React from "react";

const Errors = ({ errors }: any) => {
  return (
    <div>
      {errors.map((error: any) => {
        return <p>{error}</p>;
      })}
    </div>
  );
};

export default Errors;

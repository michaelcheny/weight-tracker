import React from "react";
import { useClickOutside } from "../helpers/useClickOutside";

type showFormProps = {
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const WeightUpdateForm = ({ showForm }: showFormProps) => {
  const outsideNode = useClickOutside(() => showForm(false));
  return (
    <div className="form-modal">
      <form ref={outsideNode}></form>
    </div>
  );
};

export default WeightUpdateForm;

import React, { useState } from "react";
import { useClickOutside } from "../helpers/useClickOutside";

type showFormProps = {
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const WeightUpdateForm = ({ showForm }: showFormProps) => {
  const [newWeight, setNewWeight] = useState<string>();
  const outsideNode = useClickOutside(() => showForm(false));
  return (
    <div className="form-modal">
      <form
        ref={outsideNode}
        onSubmit={(e) => {
          e.preventDefault();
          // connect to backend and update user weight
        }}
      >
        <input
          type="text"
          onChange={(e) => setNewWeight(e.target.value)}
          value={newWeight}
          placeholder="How much do you weigh today?"
          className="weight-form"
        />
      </form>
    </div>
  );
};

export default WeightUpdateForm;

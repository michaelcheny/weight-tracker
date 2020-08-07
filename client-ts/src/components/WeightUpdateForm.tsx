import React, { useContext } from "react";
import { useClickOutside } from "../helpers/useClickOutside";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import api from "../helpers/apiActions";
import { User } from "../interfaces/user.interface";

type Input = {
  weight: string;
};

type showFormProps = {
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const WeightUpdateForm = ({ showForm }: showFormProps) => {
  const { token, user, setUser } = useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm<Input>();
  const onSubmit = async (data: Input) => {
    console.log(data);
    // link to backend and update weight here
    const weight = await api.logWeight(token, Number(data.weight), user.id);
    console.log(weight);
    setUser((prev: User) => ({
      ...prev,
      weight_histories: [...prev.weight_histories, weight],
    }));
    showForm(false);
  };

  const outsideNode = useClickOutside(() => showForm(false));
  return (
    <div className="form-modal">
      <form ref={outsideNode} onSubmit={handleSubmit(onSubmit)}>
        <h1>Log yo weight</h1>
        <div>
          <input name="weight" type="number" ref={register({ required: true, min: 50, max: 500 })} />
          {errors.weight && <span>poopity whoop</span>}

          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default WeightUpdateForm;

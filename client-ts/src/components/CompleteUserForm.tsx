import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  activity_level: number;
  gender: string;
  age: number;
  height: number;
  weight: number;
};

const CompleteUserForm = () => {
  const { register, errors, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <div className="form-modal">
      <form className="complete-user-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Welcome! Please complete your account to begin using.</h2>
        <div>
          {/* ACTIVITY LEVEL */}
          <label id="activity_level">Activity Level</label>
          <select
            name="activity_level"
            placeholder="Activity level"
            id="activity_level"
            defaultValue="3"
            ref={register}
          >
            <option value="1">Lazy</option>
            <option value="2">Sort of Lazy</option>
            <option value="3">Not Lazy</option>
            <option value="4">Active</option>
            <option value="5">Very Active</option>
          </select>
          {/* GENDER */}
          <label id="gender">Gender</label>
          <select name="gender" id="gender" defaultValue="male" ref={register}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {/* AGE */}
          <label id="age">Age</label>
          <input type="number" name="age" id="" min="1" max="120" defaultValue="50" ref={register} />
          {/* HEIGHT */}
          <label id="height">Height</label>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ display: "inline", width: "170px" }}>
              <select name="feet" id="feet" className="height" defaultValue="5" ref={register}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <label id="feet"> Feet</label>
            </div>
            <div style={{ display: "inline" }}>
              <select name="inches" id="inches" className="height" defaultValue="1" ref={register}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <label id="inches"> Inches</label>
            </div>
          </div>
          {/* WEIGHT */}
          <label id="weight">Weight</label>
          <input type="number" name="weight" defaultValue="100" ref={register} />
          <input type="submit" value="Update" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default CompleteUserForm;

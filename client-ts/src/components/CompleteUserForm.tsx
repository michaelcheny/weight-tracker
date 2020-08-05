import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import api from "../helpers/apiActions";

type Inputs = {
  activity_level: number;
  gender: string;
  age: number;
  feet: number;
  inches: number;
  weight: number;
  goal: number;
};

const CompleteUserForm = () => {
  const { user, setUser, token } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    // console.log(data);

    const userAttributes = {
      activity_level: Number(data.activity_level),
      age: Number(data.age),
      gender: data.gender,
      weight: Number(data.weight),
      height: Number(data.feet) * 12 + Number(data.inches),
    };

    // console.log(userAttributes);
    const updatedUser = await api.update(token, userAttributes, user.id);
    console.log(updatedUser);
    // ADD METHOD TO LOG WEIGHT

    setUser(updatedUser);
  };

  return (
    <div className="form-modal">
      <form className="complete-user-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Welcome! Please complete your account to begin using.</h2>
        <div>
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
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <label id="inches"> Inches</label>
            </div>
          </div>
          {/* WEIGHT */}
          <label id="weight">Weight</label>
          <input type="number" name="weight" defaultValue="100" ref={register} />
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
          {/* GOAL */}
          <label id="goal">Goal</label>
          <select name="goal" id="goal" ref={register} defaultValue="3">
            <option value="1">Lose 1 pound a week</option>
            <option value="2">Lose 1/2 pound a week</option>
            <option value="3">Maintain weight</option>
            <option value="4">Gain 1/2 pound a week</option>
            <option value="5">Gain 1 pound a week</option>
          </select>
          {/* SUBMIT */}
          <input type="submit" value="Update" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default CompleteUserForm;

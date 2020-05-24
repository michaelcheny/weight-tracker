import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const DashboardPage = () => {
  const { user, authenticated, token } = useContext(AuthContext);

  return (
    <>
      <h1>Dashboard</h1>
      <StyledDiv>
        <h3>
          Stats for {user.first_name} {user.last_name}
        </h3>
        <StyledLi>Age: {user.age}</StyledLi>
        <StyledLi>Weight: {user.weight}</StyledLi>
        <StyledLi>Height: {user.height}</StyledLi>
        <StyledLi>Gender: {user.gender}</StyledLi>
        <StyledLi>Caloric Maintenence: {user.tdee}</StyledLi>
        <StyledLi>BMR: {user.bmr}</StyledLi>
        <StyledLi>Activity Level: {user.activity_level}</StyledLi>
        <StyledLi>Goal: {user.goal}</StyledLi>
      </StyledDiv>
      <pre>
        {!authenticated ? <Redirect to="/login" /> : null}
        {JSON.stringify(useContext(AuthContext), null, 2)}
      </pre>
    </>
  );
};

export default DashboardPage;

// borders to test placement
const StyledDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  margin: 0 auto;
`;

const StyledLi = styled.li`
  border: 2px dotted orange;
  list-style: none;
  padding: 10px 0px;
`;

import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const DashboardPage = () => {
  const { user, authenticated, token } = useContext(UserContext);

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
        <StyledLi>Gender: {user.gender}</StyledLi>
        <StyledLi>Gender: {user.gender}</StyledLi>
        <StyledLi>Gender: {user.gender}</StyledLi>
      </StyledDiv>
      <pre>
        {!authenticated ? <Redirect to="/login" /> : null}
        {JSON.stringify(useContext(UserContext), null, 2)}
      </pre>
    </>
  );
};

export default DashboardPage;

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
  padding: 8px 0px;
`;

import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNav>
      <h3>placeholder</h3>
    </StyledNav>
  );
};

export default NavBar;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 5.1vh;
  background-color: #282a36;
  color: white;
`;

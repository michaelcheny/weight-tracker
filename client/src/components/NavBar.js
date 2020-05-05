import React from "react";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <StyledNav>
      <h3>Weight Tracker</h3>
    </StyledNav>
  );
};

export const Footer = () => {
  return (
    <StyledFooter>
      <h6>© Michael Chen 2020</h6>
    </StyledFooter>
  );
};

// export default NavBar;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 5.1vh;
  background-color: #282a36;
  color: white;
  flex-shrink: 0;
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  min-height: 5.1vh;
  background-color: #282a36;
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

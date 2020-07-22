import styled, { createGlobalStyle } from "styled-components";
import BoldFont from "../assets/fonts/ArchivoBlack-Regular.ttf";
import RegularFont from "../assets/fonts/ArchivoNarrow-Regular.ttf";

interface MyInterface {}
export type { MyInterface };

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Archivo Black';
  src: local('Archivo Black'), url(${BoldFont}) format('truetype');
}

@font-face {
  font-family: 'Archivo Narrow';
  src: local('Archivo Narrow'), url(${RegularFont}) format('truetype');
}

  /* use as overlay? */
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

  }

  body {
    font-family: "Archivo Narrow", Sans-Serif,Helvetica ;
    margin: 0;
    padding: 0;
    background-color: yellowgreen;
    width: 100vw;
    height: 100vh;
  }
  
  
`;

export default GlobalStyle;

export const MainWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;
`;

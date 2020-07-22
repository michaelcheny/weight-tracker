import { createGlobalStyle } from "styled-components";
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

  body {
    margin: 0;
    padding: 0;
    background-color: yellowgreen;
    font-family: "Archivo Narrow", Sans-Serif,Helvetica ;
  }
`;

export default GlobalStyle;

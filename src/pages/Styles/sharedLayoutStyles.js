import styled, { createGlobalStyle } from 'styled-components';

const colorViolet = '#5964e0';
const colorLightViolet = '#939bf4';
const colorVeryDarkBlue = '#19202d';
const colorMidnight = '#121721';
const colorWhite = '#fff';
const colorLightGrey = '#f4f6f8';
const colorGrey = '#9daec2';
const colorDarkGrey = '#6e8098';
const mainTransition = `all 0.3s linear`;

export const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body{
 font-family: 'Kumbh Sans', sans-serif;
 background: ${({ theme }) => theme.appBackground};
 font-size: 1rem;
 transition: ${mainTransition};
 color: ${colorDarkGrey};
 line-height: 1.8;

}

h1,
h2 {
  color : ${({ theme }) => theme.color};
}

h3 {
  color: ${colorViolet};
}
`;

export const darkTheme = {
  appBackground: `${colorMidnight}`,
  backgroundColor: `${colorVeryDarkBlue}`,
  color: `${colorWhite}`,
  checkbox: '#313743',
  backgroundColorBtn2: '#303642',
  backgroundColorBtn2Hover: '#696e76',
  colorBtn2: `${colorWhite}`,
  left: `50%`,
};

export const lightTheme = {
  appBackground: `${colorLightGrey}`,
  backgroundColor: `${colorWhite}`,
  color: `${colorVeryDarkBlue}`,
  checkbox: '#e7e8e9',
  backgroundColorBtn2: '#eeeffc',
  backgroundColorBtn2Hover: '#c5c9f4',
  colorBtn2: `${colorViolet}`,
  left: `0`,
};

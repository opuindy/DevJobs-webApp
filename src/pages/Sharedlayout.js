import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLightMode } from './Styles/useLightMode';
import Navbar from '../Components/NavbarComponents/NavBar';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle,
  lightTheme,
  darkTheme,
} from './Styles/sharedLayoutStyles';

const Sharedlayout = () => {
  const [colorTheme, toggleTheme, move] = useLightMode();
  const themeMode = colorTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar colorTheme={colorTheme} toggleTheme={toggleTheme} move={move} />
      <Outlet />
    </ThemeProvider>
  );
};

export default Sharedlayout;

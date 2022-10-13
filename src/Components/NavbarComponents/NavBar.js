import React, { useEffect } from 'react';
import { images } from '../utilities';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { Header, NavContainer, LogoContainer, Button } from './navBarStyles';

const NavBar = ({ toggleTheme, move }) => {
  const { reset } = useGlobalContext();
  return (
    <Header>
      <NavContainer>
        <Link to='/'>
          <img src={images.logo} alt='logo' onClick={reset} />
        </Link>
        <LogoContainer>
          <img src={images.sun} alt='sun_logo' />
          <Button move={move} onClick={toggleTheme}>
            <span></span>
          </Button>
          <img src={images.moon} alt='sun_moon' />
        </LogoContainer>
      </NavContainer>
    </Header>
  );
};

export default NavBar;

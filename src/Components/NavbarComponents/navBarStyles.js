import styled from 'styled-components';
import { images } from '../utilities';

const colorViolet = '#5964e0';
const mainTransition = `all 0.3s linear`;
const colorWhite = '#fff';

export const Header = styled.header`
  width: 100%;
  height: 21vh;
  background: url(${images.backgroundMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0 2em;
  padding-top: 0em;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    border-bottom-left-radius: 100px;
    background: url(${images.backgroundTablet});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  @media screen and (min-width: 1204px) {
    border-bottom-left-radius: 100px;
    background: url(${images.backgroundDesktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 0;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 100px;
  /* height: 2rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  height: 1.5rem;
  width: 50%;
  border-radius: 50px;
  border: none;
  outline: none;
  position: relative;
  background: ${colorWhite};
  transition: ${mainTransition};

  span {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: ${colorViolet};
    position: absolute;
    margin: 0 0.3em;
    transition: ${mainTransition};
    top: 50%;
    transform: translateY(-50%);
    left: ${(props) => (props.move ? '0' : '50%')};
    left: ${({ theme }) => theme.left};
    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

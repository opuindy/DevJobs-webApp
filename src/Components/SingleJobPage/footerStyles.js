import styled from 'styled-components';

const colorViolet = '#5964e0';
const colorLightViolet = '#939bf4';
const colorWhite = '#fff';
const mainTransition = `all 0.3s linear`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 12vh;
  background: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
`;

export const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 780px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.3rem;
  }

  button {
    padding: 15px 20px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 6px;
    background: ${colorViolet};
    transition: ${mainTransition};

    @media screen and (min-width: 768px) {
      width: 180px;
      margin-top: 0;
    }
  }
  button:hover {
    cursor: pointer;
    background: ${colorLightViolet};
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: ${colorWhite};
    font-size: 1rem;
    letter-spacing: 0.05em;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

import styled from 'styled-components';

const mainTransition = `all 0.3s linear`;
const colorViolet = '#5964e0';
const colorLightViolet = '#939bf4';
const colorWhite = '#fff';

export const ButtonContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 4em;
  width: max-content;
  height: max-content;

  button {
    padding: 15px 35px;
    border: none;
    outline: none;
    border-radius: 6px;
    color: ${colorWhite};
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 700;
    transition: ${mainTransition};
    background: ${colorViolet};
  }
  button:hover {
    cursor: pointer;
    background: ${colorLightViolet};
  }
`;

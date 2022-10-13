import styled from 'styled-components';

const colorViolet = '#5964e0';
const colorLightViolet = '#939bf4';
const colorWhite = '#fff';
const colorGrey = '#9daec2';
const mainTransition = `all 0.3s linear`;

export const ModalContainer = styled.section`
  width: 100%;
  height: 120vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: -21vh;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  z-index: 2;
`;

export const InnerContainer = styled.div`
  /* margin-top: -1vh; */
  width: 100%;
  height: max-content;
  background: ${({ theme }) => theme.appBackground};
  border-radius: 9px;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01em solid ${colorGrey};

  input {
    width: 85%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.color};
    font-size: 1rem;
    font-weight: 500;
  }

  img {
    margin: 0 auto;
  }
`;

export const SortContainer = styled.div`
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0 2em;

  button {
    height: 3rem;
    width: 100%;
    background: ${colorViolet};
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 700;
    color: ${colorWhite};
  }

  button:hover {
    cursor: pointer;
    background: ${colorLightViolet};
  }

  .input_container {
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5em;
  }

  .input_container input[type='checkbox'] {
    opacity: 0;
  }

  label {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color};
  }

  label:hover {
    cursor: pointer;
  }

  .input_container label::before {
    content: '';
    display: inline-block;
    height: 23px;
    width: 23px;
    border: none;
    border-radius: 3px;
    transition: ${mainTransition};
    background: ${({ theme }) => theme.checkbox};
  }

  .input_container label::after {
    content: '';
    display: inline-block;
    height: 8px;
    width: 15px;
    border-left: 2px solid ${colorLightViolet};
    border-bottom: 2px solid ${colorLightViolet};
    transform: rotate(-45deg);
    transition: ${mainTransition};
  }

  .input_container label {
    position: relative;
  }

  .input_container label::after,
  .input_container label::before {
    position: absolute;
  }

  .input_container label::before {
    top: 1px;
    left: -38px;
  }

  .input_container label::after {
    top: 6px;
    left: -35px;
  }

  .input_container input[type='checkbox'] + label::after {
    content: none;
    transition: ${mainTransition};
  }

  .input_container input[type='checkbox']:checked + label::after {
    content: '';
    border-left: 2px solid ${colorWhite};
    border-bottom: 2px solid ${colorWhite};
    transition: ${mainTransition};
  }

  .input_container input[type='checkbox']:checked + label::before {
    content: '';
    background: ${colorViolet};
    transition: ${mainTransition};
  }
`;

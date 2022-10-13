import styled from 'styled-components';

const colorGrey = '#9daec2';
const mainTransition = `all 0.3s linear`;
const borderRadius = '8px';
const colorViolet = '#5964e0';
const colorLightViolet = '#939bf4';
const colorWhite = '#fff';

export const Section = styled.section`
  width: 100%;
  height: 5rem;
  padding: 0 2em;
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 100%;
  margin: 0 auto;
  border-radius: ${borderRadius};
  transition: ${mainTransition};
  background: ${({ theme }) => theme.backgroundColor};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/4;
  padding: 0.5em 1.5em;

  .input {
    width: 75%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.color};
    padding: 0 0.4em;
    font-size: 1rem;
    font-weight: 500;

    .filter_icon {
      display: block;
      margin-left: 1em;
    }

    @media screen and (max-width: 767px) {
      padding: 0 0.6em;
    }

    @media screen and (min-width: 768px) {
      width: 80%;
    }
    @media screen and (min-width: 1204px) {
      width: 93%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    grid-column: 1/3;
    padding: 0 1.5em;
  }
  @media screen and (min-width: 1204px) {
    padding: 0 1.5em;
  }
`;

export const MobileFilterContainer = styled.div`
  width: 115px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    height: 100%;
    width: 50%;
    background: ${colorViolet};
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;

    .search_icon_img {
      margin: auto;
    }

    &:hover {
      cursor: pointer;
      background: ${colorLightViolet};
    }
  }

  img {
    display: block;
    margin-left: 0.5em;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const FilterContainer = styled.div`
  display: none;

  justify-content: space-between;
  align-items: center;
  grid-column: 1/4;
  grid-column: 4/6;
  border-left: 0.01em solid ${colorGrey};
  border-right: 0.01em solid ${colorGrey};

  input {
    width: 80%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.color};
    /* color: #c5c9f4; */
    font-size: 1rem;
    font-weight: 500;
  }

  img {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    display: flex;
    grid-column: 3/5;
  }
  @media screen and (min-width: 1204px) {
    display: flex;
  }
`;

export const SortContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  grid-column: 6/8;
  padding: 0.8em 1.2em;

  button {
    height: 90%;
    width: 135px;
    background: ${colorViolet};
    border-radius: 9px;
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

    @media screen and (min-width: 1204px) {
      margin-left: 0.8em;
    }
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
    left: -30px;
  }

  .input_container label::after {
    top: 6px;
    left: -26px;
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

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    grid-column: 5/8;
    display: flex;
  }
  @media screen and (min-width: 1204px) {
    display: flex;
  }
`;

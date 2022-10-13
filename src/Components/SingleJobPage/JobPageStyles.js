import styled from 'styled-components';

const colorGrey = '#9daec2';
const mainTransition = `all 0.3s linear`;
const borderRadius = '8px';
const colorViolet = '#5964e0';
const colorLightViolet = '#939bf4';
const colorWhite = '#fff';

export const Container = styled.section`
  min-height: calc(100vh - 21vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 780px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(1 1fr);
  grid-template-rows: 250px auto;
  gap: 25px;
  border-radius: 9px;
  margin-top: -3vh;
  margin-bottom: 4em;
  @media screen and (min-width: 768px) {
    margin-top: -6vh;
    grid-template-columns: repeat(1 1fr);
    grid-template-rows: 150px auto;
  }
`;

export const CompanyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 9px;
  position: relative;
  transform: ${mainTransition};

  .company_site {
    margin-top: 2em;
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: ${mainTransition};

    @media screen and (min-width: 768px) {
      height: 60%;
      width: 70%;
      margin-top: auto;
      margin-bottom: auto;
      margin-left: auto;
      margin-right: 2.5em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  h2 {
    font-size: 1.5rem;
  }

  .url {
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }

  button {
    padding: 15px 20px;
    border: none;
    outline: none;
    border-radius: 6px;
    transition: ${mainTransition};
    background: ${({ theme }) => theme.backgroundColorBtn2};
  }
  button:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.backgroundColorBtn2Hover};
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.colorBtn2};
    font-size: 1rem;
  }
`;

export const LogoContainer = styled.div`
  height: 5rem;
  width: 5.5rem;
  background: ${(props) =>
    props.logoBackground ? props.logoBackground : 'yellow'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  transition: ${mainTransition};

  img {
    display: block;
    width: 45%;
    height: 45%;
    object-fit: contain;
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    width: 9rem;
    left: 0;
    top: 0;
    transform: none;
    border-radius: 0px;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 9px;
  padding: 3em 2em;
  @media screen and (min-width: 768px) {
    padding: 4em 2.5em;
  }
`;

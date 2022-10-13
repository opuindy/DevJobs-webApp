import styled from 'styled-components';

const colorDarkGrey = '#6e8098';
const mainTransition = `all 0.3s linear`;

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 21vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 2em;
`;

export const InnerContainer = styled.section`
  height: 100%;
  width: 100%;
  max-width: 1250px;
  padding-top: 7em;
  display: grid;
  gap: 2em;
  z-index: 0;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  grid-auto-rows: 280px;
  margin: 0 auto;
  margin-bottom: 4em;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1204px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const JobCard = styled.article`
  margin-top: 2em;
  padding-left: 2em;
  border-radius: 9px;
  background: ${({ theme }) => theme.backgroundColor};
  position: relative;

  .ago_container {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3em;
  }
  .fullstop {
    border-radius: 50%;
    height: 0.3rem;
    width: 0.3rem;
    background: ${colorDarkGrey};
    margin-bottom: 0;
  }

  h2 {
    font-size: 1.3rem;
    margin-top: 0.3em;
  }

  h3 {
    font-size: 0.9rem;
    margin-top: 2em;
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
    text-transform: capitalize;
  }
  .company {
    margin-top: 0.6em;
  }

  a {
    text-decoration: none;
    font-size: 1.3rem;
    margin-top: 0.3em;
    color: ${({ theme }) => theme.color};
    font-weight: 700;
  }
  a:hover {
    cursor: pointer;
    color: ${colorDarkGrey};
  }
`;

export const LogoContainer = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.logoBackground ? props.logoBackground : ' yellowgreen'};
  position: absolute;
  top: -1.5rem;
  left: 1.5em;
  transition: ${mainTransition};
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 24em;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor};
`;

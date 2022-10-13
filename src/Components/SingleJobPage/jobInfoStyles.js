import styled from 'styled-components';

const colorGrey = '#9daec2';
const mainTransition = `all 0.3s linear`;
const borderRadius = '8px';
const colorViolet = '#5964e0';
const colorLightViolet = '#939bf4';
const colorWhite = '#fff';

export const PositionContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  transition: ${mainTransition};
  button {
    padding: 15px 20px;
    width: 100%;
    border: none;
    outline: none;
    margin-top: 3em;
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
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PositionInfo = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;

    .fullStop {
      font-size: 1rem;
      font-weight: 900;
    }
  }
`;

export const Description = styled.div`
  margin-bottom: 2em;
`;

export const Requirement = styled.h2`
  text-align: left;
  margin-right: auto;
  margin-bottom: 1em;
`;

export const Content = styled.p`
  margin-bottom: 2em;
`;

export const RequirementList = styled.ul`
  padding-left: 0.8em;
  margin-bottom: 2em;
  li {
    margin-top: 0.5em;
  }
`;

export const Role = styled(Requirement)``;
export const RoleList = styled.ol`
  padding-left: 0.8em;
  /* margin-bottom: 2em; */
  li {
    margin-top: 0.5em;
  }
`;

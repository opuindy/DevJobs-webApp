import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { JobCard, LogoContainer } from './jobStyles';

const Jobcards = ({
  id,
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  location,
}) => {
  // const navigate = useNavigate();
  // const nav = () => {
  //   navigate(`/job/${id}`);
  // };

  return (
    <JobCard>
      <LogoContainer logoBackground={logoBackground}>
        <img src={logo} alt='company_logo' />
      </LogoContainer>
      <div className='ago_container'>
        <p>{postedAt}</p>
        <div className='fullstop'></div>
        <p>{contract}</p>
      </div>
      <Link to={`/job/${id}`}>{position}</Link>
      <p className='company'>{company}</p>
      <h3>{location}</h3>
    </JobCard>
  );
};

export default Jobcards;

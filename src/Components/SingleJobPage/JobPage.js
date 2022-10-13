import React from 'react';
import Footer from './Footer';
import JobInfo from './JobInfo';
import {
  Container,
  InnerContainer,
  CompanyCard,
  LogoContainer,
} from './JobPageStyles';

const JobPage = ({ job }) => {
  const { logo, logoBackground, company, website, apply } = job;
  return (
    <>
      <Container>
        <InnerContainer>
          <CompanyCard>
            <LogoContainer logoBackground={logoBackground}>
              <img src={logo} alt='company logo' />
            </LogoContainer>
            <div className='company_site'>
              <div className='url'>
                <h2>{company}</h2>
                <p>{website}</p>
              </div>

              <button>
                <a href={apply} target='_blank' rel='noopener noreferrer'>
                  Company Site
                </a>
              </button>
            </div>
          </CompanyCard>
          <JobInfo job={job} />
        </InnerContainer>
      </Container>
      <Footer job={job} />
    </>
  );
};

export default JobPage;

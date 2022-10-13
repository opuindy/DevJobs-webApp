import React from 'react';
import { useGlobalContext } from '../context';
import { FooterContainer, InnerContainer } from './footerStyles';

const Footer = ({ job }) => {
  const { windowWidth } = useGlobalContext();
  const { position, company, apply } = job;
  return (
    <FooterContainer>
      <InnerContainer>
        {windowWidth > 767 && (
          <div>
            <h1>{position}</h1>
            <p>{company}</p>
          </div>
        )}

        <button>
          <a href={apply} target='_blank' rel='noopener noreferrer'>
            Apply Now
          </a>
        </button>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;

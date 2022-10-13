import React, { useState } from 'react';
import { Container, InnerContainer, TextContainer } from './jobStyles';
import { useGlobalContext } from '../context';
import Jobcards from './Jobcards';
import { Link } from 'react-router-dom';
import MoreButton from './MoreComponent/MoreButton';

const Jobs = () => {
  const { data, showMoreBtn } = useGlobalContext();
  if (data.length < 1) {
    return (
      <Container>
        <InnerContainer>
          <TextContainer>
            <h3>No result matched your search criteria</h3>
          </TextContainer>
        </InnerContainer>
      </Container>
    );
  }
  return (
    <Container>
      <InnerContainer>
        {showMoreBtn
          ? data
              .map((job) => {
                return <Jobcards key={job.id} {...job} />;
              })
              .splice(0, 9)
          : data.map((job) => {
              return <Jobcards key={job.id} {...job} />;
            })}
      </InnerContainer>
      {showMoreBtn && <MoreButton />}
    </Container>
  );
};

export default Jobs;

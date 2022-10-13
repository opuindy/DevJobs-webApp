import React, { useState } from 'react';
import data from '../../assets/data.json';
import { CompanyInfo } from './JobPageStyles';
import {
  PositionContainer,
  PositionInfo,
  Description,
  Requirement,
  Content,
  RequirementList,
  Role,
  RoleList,
} from './jobInfoStyles';

const JobInfo = ({ job }) => {
  const {
    position,
    postedAt,
    contract,
    location,
    apply,
    description,
    requirements,
    role,
  } = job;
  return (
    <CompanyInfo>
      <PositionContainer>
        <PositionInfo>
          <div>
            <p>{postedAt}</p>
            <p className='fullStop'>.</p>
            <p>{contract}</p>
          </div>
          <h1>{position}</h1>
          <h3>{location}</h3>
        </PositionInfo>
        <button>
          <a href={apply} target='_blank' rel='noopener noreferrer'>
            Apply Now
          </a>
        </button>
      </PositionContainer>
      <Description>{description}</Description>
      <Requirement>Requirements</Requirement>
      <Content>{requirements.content}</Content>
      <RequirementList>
        {requirements.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </RequirementList>
      <Role>What You Will Do</Role>
      <Content>{role.content}</Content>
      <RoleList>
        {role.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </RoleList>
    </CompanyInfo>
  );
};

export default JobInfo;

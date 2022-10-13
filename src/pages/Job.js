import React from 'react';
import JobPage from '../Components/SingleJobPage';
import { useGlobalContext } from '../Components/context';
import { useParams } from 'react-router-dom';

const Job = () => {
  const { data } = useGlobalContext();
  const { jobId } = useParams();

  const job = data.find((job) => {
    return job.id == jobId;
  });

  return (
    <>
      <JobPage job={job} />
    </>
  );
};

export default Job;

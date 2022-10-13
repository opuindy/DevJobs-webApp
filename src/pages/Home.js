import React from 'react';
import Jobs from '../Components/JobsComponents';
import SearchBar from '../Components/SearchBarComponent';
import ModalSearchBar from '../Components/SearchBarComponent/modalSearchBar';
import { useGlobalContext } from '../Components/context';
import JobPage from '../Components/SingleJobPage';

const Home = () => {
  const { windowWidth, closeMobileNav, openModal, loading } =
    useGlobalContext();

  if (loading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <>
      {/* <JobPage /> */}
      <SearchBar />
      {windowWidth < 768 && openModal ? (
        <ModalSearchBar closeMobileNav={closeMobileNav} />
      ) : null}

      <Jobs />
    </>
  );
};

export default Home;

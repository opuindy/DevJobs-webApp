import React, { useEffect, useRef } from 'react';
import { images } from '../../utilities';
import { useGlobalContext } from '../../context';
import {
  InnerContainer,
  ModalContainer,
  FilterContainer,
  SortContainer,
} from './modalStyles';

const ModalSearchBar = ({ closeMobileNav }) => {
  const { windowWidth, filterByTitle, handleKeyPressFilter2 } =
    useGlobalContext();

  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <ModalContainer onClick={closeMobileNav}>
      <InnerContainer onClick={(e) => e.stopPropagation()}>
        <FilterContainer>
          <img src={images.locationDesktop} alt='location_icon' />
          <input
            type='text'
            placeholder='Filter by location...'
            ref={searchValue}
            onChange={filterByTitle}
            onKeyPress={handleKeyPressFilter2}
          />
        </FilterContainer>
        <SortContainer>
          <div className='input_container'>
            <input type='checkbox' id='full' />
            <label htmlFor='full'>
              {windowWidth < 1204 ? `Full Time` : 'Full Time Only'}
            </label>
          </div>
          <button>Search</button>
        </SortContainer>
      </InnerContainer>
    </ModalContainer>
  );
};

export default ModalSearchBar;

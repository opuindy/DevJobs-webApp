import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { images } from '../utilities';

import {
  Container,
  Section,
  SortContainer,
  SearchContainer,
  FilterContainer,
  MobileFilterContainer,
} from './searchBarStyles';

const SearchBar = () => {
  const {
    windowWidth,
    openMobileNav,
    filterByTitle,
    handleKeyPress,
    handleKeyPressFilter,
    handleClick,
  } = useGlobalContext();

  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <Section>
      <Container>
        <SearchContainer>
          {windowWidth > 768 && (
            <img
              src={images.searchDesktop}
              alt='search_icon'
              className='filter_icon'
            />
          )}
          <input
            type='text'
            className='input'
            placeholder={
              windowWidth < 1203
                ? 'Filter by title...'
                : 'Filter by title,companies, expertise... '
            }
            ref={searchValue}
            onChange={filterByTitle}
            onKeyPress={handleKeyPress}
          />
          {windowWidth <= 767 && (
            <MobileFilterContainer>
              <img
                src={images.filterMobile}
                alt='filter_icon'
                onClick={openMobileNav}
              />
              <div>
                <img
                  src={images.searchMobile}
                  alt='search_icon'
                  className='search_icon_img'
                />
              </div>
            </MobileFilterContainer>
          )}
        </SearchContainer>
        <FilterContainer>
          <img src={images.locationDesktop} alt='location_icon' />
          <input
            type='text'
            placeholder='Filter by location...'
            onChange={filterByTitle}
            onKeyPress={handleKeyPressFilter}
          />
        </FilterContainer>
        <SortContainer>
          <div className='input_container'>
            <input
              type='checkbox'
              id='full time'
              name='contract'
              value='full time'
              onChange={filterByTitle}
            />
            <label htmlFor='full time'>
              {windowWidth < 1204 ? `Full Time` : 'Full Time Only'}
            </label>
          </div>
          <button onClick={handleClick}>Search</button>
        </SortContainer>
      </Container>
    </Section>
  );
};

export default SearchBar;

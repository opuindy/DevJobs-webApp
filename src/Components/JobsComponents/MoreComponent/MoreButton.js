import React from 'react';
import { ButtonContainer } from './moreButtonStyles';
import { useGlobalContext } from '../../context';

const MoreButton = () => {
  const { showMore } = useGlobalContext();

  return (
    <ButtonContainer>
      <button type='button' onClick={showMore}>
        load more
      </button>
    </ButtonContainer>
  );
};

export default MoreButton;

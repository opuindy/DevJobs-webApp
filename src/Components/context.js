import React, { useEffect, useContext, useReducer } from 'react';
import reducer from './reducer';
import data from '../../src/assets/data.json';

const AppContext = React.createContext();

const initialState = {
  windowWidth: window.innerWidth,
  openModal: false,
  loading: false,
  showMoreBtn: true,
  original: data,
  query: '',
  data: data,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSize = () => {
    dispatch({ type: 'HANDLE_SIZE' });
  };
  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  const openMobileNav = () => {
    dispatch({ type: 'OPENMOBILENAV' });
  };

  const closeMobileNav = () => {
    dispatch({ type: 'CLOSEMOBILENAV' });
  };

  const showMore = () => {
    dispatch({ type: 'SHOW_MORE' });
  };

  const handleKeyPress = (event) => {
    dispatch({ type: 'HANDLE_KEY_PRESS', payload: event });
  };

  const handleKeyPressFilter = (event) => {
    dispatch({ type: 'HANDLE_KEY_PRESS_FILTER', payload: event });
  };

  const handleKeyPressFilter2 = (event) => {
    dispatch({ type: 'HANDLE_KEY_PRESS_FILTER2', payload: event });
  };

  const filterByTitle = (event) => {
    dispatch({ type: 'FILTER_BY_TITLE', payload: event });
  };

  const handleClick = () => {
    dispatch({ type: 'HANDLE_CLICK' });
  };

  // const filterByContract = (event) => {
  //   dispatch({ type: 'FILTER_BY_CONTRACT', payload: event });
  // };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openMobileNav,
        closeMobileNav,
        showMore,
        handleKeyPress,
        filterByTitle,
        handleKeyPressFilter,
        handleKeyPressFilter2,
        handleClick,
        reset,
        // filterByContract,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

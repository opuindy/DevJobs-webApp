import { useState, useEffect } from 'react';

export const useLightMode = () => {
  const [colorTheme, setColorTheme] = useState('light');
  const [move, setMove] = useState(true);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setColorTheme(mode);
  };

  const toggleTheme = () => {
    colorTheme === 'light' ? setMode('dark') : setMode('light');
    toogleMove();
  };

  const toogleMove = () => {
    setMove(!move);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setColorTheme(localTheme) : setMode('dark');
  }, []);

  // useEffect(() => {
  //   toogleTranslate();
  // }, [colorTheme, toogleTranslate, setTranslate]);

  return [colorTheme, toggleTheme, move];
};

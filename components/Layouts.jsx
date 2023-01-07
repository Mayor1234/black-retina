import React from 'react';
import Header from './Header';

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layouts;

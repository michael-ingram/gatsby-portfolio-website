import React, { useState } from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import NavbarContext from '../utils/NavbarContext';
import IconLinks from './IconLinks';

export default function Layout({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const value = { showNavbar, setShowNavbar};
  return (
    <NavbarContext.Provider value={value}>
      <GlobalStyles />
      <Nav />
      <IconLinks />
      {children}
    </NavbarContext.Provider>
  );
}

import React from 'react';

const NavbarContext = React.createContext({
  showNavbar: false,
  setShowNavbar: () => {},
});

export default NavbarContext;

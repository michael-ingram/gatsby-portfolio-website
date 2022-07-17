import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaArrowCircleLeft } from '@react-icons/all-files/fa/FaArrowCircleLeft';


import NavStyles from '../styles/NavStyles';
import NavIconStyles from '../styles/NavIconStyles';
import NavbarContext from '../utils/NavbarContext';

export default function Nav() {
  const { showNavbar, setShowNavbar } = useContext(NavbarContext);
  const onClick = () => setShowNavbar(true);
  const hideNav = () => setShowNavbar(false);
  if (showNavbar === false) {
    return (
      <NavIconStyles>
          <FaBars className='nav-icon' onClick={onClick} />
      </NavIconStyles>
    );
  } else {
    return (
      <NavStyles>
        <div className='nav-container'>
            <FaArrowCircleLeft className='cancel-icon' onClick={hideNav} />
        <ul>
          <li>
            <Link to='/' activeClassName='active' onClick={hideNav}>Home</Link>
          </li>
          <li>
            <Link to='/about' activeClassName='active' onClick={hideNav}>About</Link>
          </li>
          <li>
            <Link to='/projects' activeClassName='active' onClick={hideNav}>Projects</Link>
          </li>
          <li>
            <Link to='/contact' activeClassName='active' onClick={hideNav}>Contact</Link>
          </li>
        </ul>
        </div>
      </NavStyles>
    );
  }
}
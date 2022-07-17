import React, { useContext } from 'react';
import HomePageStyles from '../styles/HomePageStyles';
import NavbarContext from '../utils/NavbarContext';

export default function HomePage() {
  const { showNavbar, setShowNavbar } = useContext(NavbarContext);
  if (showNavbar) {
    return <></>;
  } else {
    return (
      <HomePageStyles>
        <div className='title-outer-container'>
          <div className='title-inner-container'>
            <div className='title'>Michael Ingram</div>
            <div className='subtitle'>Full Stack Developer</div>
          </div>
        </div>
      </HomePageStyles>
    );
  }
}
import React, { useContext } from 'react';
import AboutPageStyles from '../styles/AboutPageStyles';
import NavbarContext from '../utils/NavbarContext';


export default function AboutPage() {
  const { showNavbar, setShowNavbar } = useContext(NavbarContext);
  if (showNavbar) {
    return <></>;
  }
  return (
    <AboutPageStyles>
      <div className="content-outer-container">
        <div className="content-inner-container">
          <h1 className="content-title">About</h1>
          <div className="scrollable-content">
            <p className="about-info">
              I am a fullstack software developer currently located in Salt Lake
              City, UT. I graduated with a Masters and Bachelors degree in
              Statistcs from University of Colorado Denver and Colorado State
              University, respectively. <br />
              <br />
              Post graduation, I worked as a data analyst at T Carta Marine, a
              geospatial company, in Denver. Realizing my passion was for
              software development, I made the transition from data analyst to
              software engineer where I currently work at Breeze Airways.
              <br />
              <br />
              I have experience in front-end development using
              Typescript/Javascript frameworks, React and Angular. Server side
              I have experience using Java (Spring Boot), Ruby (on Rails) and Node.js (Express).
              <br />
              <br />
              My unique background has given me a wide variety of experiences
              from published research in statistics, to work experience in
              machine learning and full stack software development. For more
              information, see the projects page for some example work, download
              my resume or checkout my github using the links in the top right corner!
            </p>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}

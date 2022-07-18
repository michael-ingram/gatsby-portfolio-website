import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaArrowAltCircleRight } from '@react-icons/all-files/fa/FaArrowAltCircleRight';
import { FaArrowAltCircleLeft } from '@react-icons/all-files/fa/FaArrowAltCircleLeft';
import ProjectPageStyles from '../styles/ProjectPageStyles';
import SEO from '../components/SEO';

export default function ProjectsPage({ data }) {
  const websites = data.websites.nodes;
  const numSites = websites.length;
  const [projIndex, setProjIndex] = useState(1);
  console.log('Project Index: ', projIndex);

  const decreaseIndex = () => {
    if (projIndex !== 0) {
      setProjIndex(projIndex - 1);
    }
  }
  const increaseIndex = () => {
    if (projIndex !== numSites - 1) {
      setProjIndex(projIndex + 1);
    }
  }
  return (
    <ProjectPageStyles>
      <SEO title="Projects" />
      <div className='header-container'>
        {projIndex !== 0 && <FaArrowAltCircleLeft className='mobile-arrow mobile-arrow-left' onClick={decreaseIndex} />}
        {projIndex === 0 && <FaArrowAltCircleLeft className='mobile-arrow hidden-mobile mobile-arrow-left' />}
        <div className="outer-container">
          <div className="inner-container">
            <h1 className='header'>Projects</h1>
          </div>
        </div>
        {projIndex !== numSites - 1 && (
          <FaArrowAltCircleRight className='mobile-arrow mobile-arrow-right'onClick={increaseIndex} />
        )}
        {projIndex === numSites - 1 && (
          <FaArrowAltCircleRight className='mobile-arrow hidden-mobile mobile-arrow-right' />
        )}
      </div>
      <div className='image-main-container'>
        {projIndex !== 0 && <FaArrowAltCircleLeft className='left-arrow arrow' onClick={decreaseIndex} />}
        {projIndex === 0 && <FaArrowAltCircleLeft className='hidden-arrow' />}
        <div className='outer-page-content'>
        <div className='page-content'>
            <div className='image-container'>
              <a href={`${websites[projIndex].url}`}>
              <Img fluid={websites[projIndex].mainImage.asset.fluid} />
              </a>
            </div>
          <p className='description'>{websites[projIndex].description}</p>
        </div>
        </div>
        {projIndex !== numSites - 1 && (
          <FaArrowAltCircleRight className='right-arrow arrow'onClick={increaseIndex} />
        )}
        {projIndex === numSites - 1 && (
          <FaArrowAltCircleRight className='hidden-arrow' />
        )}
      </div>
    </ProjectPageStyles>
  );
}

export const query = graphql`
    query WebsitesQuery {
        websites:  allSanityWebsites {
            nodes {
                description
                slug {
                    current
                }
                name
                url
                mainImage {
                    asset {
                        fluid(maxWidth: 200, maxHeight: 200) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;
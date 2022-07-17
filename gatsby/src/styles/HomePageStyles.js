import styled from 'styled-components';

const HomePageStyles = styled.div`
  .title {
    text-align: center;
    color: var(--offwwhite);
    margin: 0;
    padding: 20px;
    font-size: 7rem;
    font-family: 'The Nautigal', cursive;
    @media (max-width: 900px) {
      font-size: 5rem;
      padding: 10px;
    }
    @media (max-width: 500px) {
      font-size: 3rem;
      padding: 10px;
    }
    @media (max-width: 300px) {
      font-size: 2rem;
      padding: 5px;
    }
  }
  .subtitle{
    text-align: center;
    color: var(--offwwhite);
    margin: 0;
    padding: 0 20px 20px 20px;
    font-size: 2rem;
    @media (max-width: 900px) {
      font-size: 1.5rem;
      padding: 10px;
    }
    @media (max-width: 500px) {
      font-size: 1rem;
      padding: 0 10px 10px 10px;
    }
    @media (max-width: 300px) {
      font-size: 0.5rem;
      padding: 0 5px 5px 5px;
    }
  }
  .title-outer-container {
    background-color: var(--charcoal);
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    margin: 0;
    padding: 10px;
    @media (max-width: 900px) {
      width: 65%;
    }
    @media (max-width: 500px) {
      padding: 5px;
    }
  }
  .title-inner-container {
    background: radial-gradient(var(--charcoal), var(--onyx));
    margin: 0 auto;
    border-radius: 20px;
    height: 100%;
    width: 100%;
  }
  .right{
    margin-left: 10%;
  }
  .right-title{
    font-family: 'Ibarra Real Nova', serif;
    text-align: center;
    font-size: 3rem;
  }
`;

export default HomePageStyles;

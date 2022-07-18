import styled from 'styled-components';

const ProjectPageStyles = styled.div`
  .header{
    text-align: center;
    font-family: 'The Nautigal', cursive;
    margin: 0;
    @media(max-width: 400px){
      font-size: 3rem;
    }
    @media(max-height: 600px){
      font-size: 3rem;
    }
    @media(max-height: 450px){
      font-size: 2rem;
    }
  }
  .header-container{
    display: flex;
    justify-content: space-evenly;
    flex-flow: row nowrap;
  }
  .outer-container{
    background-color: var(--onyx);
    border-radius: 20px;
    padding: 20px;
    width: 40%;
    margin: 20px auto;
    @media(max-height: 600px){
      display: none;
    }
  }
  .inner-container{
    background: radial-gradient(var(--charcoal), var(--onyx));
    margin: 0 auto;
    border-radius: 20px;
    max-height: 100%;
    width: 100%;
    
  }
  .image-main-container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row nowrap;
  }
  
  .image-container{
    height: 300px;
    width: 300px;
    padding: 10px;
    margin: 0 auto;
    @media(max-width: 800px){
      height: 200px;
      width: 200px;
    }
    @media(max-width: 350px){
      height: 150px;
      width: 150px;
    }
    @media(max-height: 600px){
      height: 150px;
      width: 150px;
    }
    @media(max-height: 300px){
      height: 150px;
      width: 150px;
    }
  }
  .description{
    font-size: 1.5rem;
    text-decoration: none;
    max-width: 300px;
    padding: 10px;
    margin: 0;
    text-align: center;
    @media(max-width: 800px){
      font-size: 1rem;
      max-width: 200px;
    }
    @media(max-width: 350px){
      font-size: 0.75rem;
      max-width: 150px;
    }
    @media(max-height: 600px){
      font-size: 1rem;
      max-width: 300px;
    }
    @media(max-height: 300px){
      font-size: 0.75rem;
      max-width: 150px;
    }
  }
  .page-content{
    display: flex;
    justify-content: space-evenly;
    flex-flow: row nowrap;
    background: radial-gradient(var(--charcoal), var(--onyx));
    @media(max-width: 630px){
      flex-flow: column nowrap;
    }
  }
  .outer-page-content{
    padding: 10px;
    background-color: var(--onyx);
    border-radius: 20px;
    margin-top: 10px;
    @media(max-height: 600px){
      margin-top: 10px;
    }
  }
  .arrow{
    font-size: 4rem;
    @media(max-width: 630px){
      display: none;
    }
  }
  .hidden-arrow{
    font-size: 4rem;
    color: transparent;
    @media(max-width: 630px){
      display: none;
    }
  }
  .mobile-arrow{
    display: none;
    margin-top: 10px;
    @media(max-width: 630px){
      display: block;
    }
  }
  .mobile-arrow-left{
    
  }
  .mobile-arrow-right{
  }
  .hidden-mobile{
    color: transparent;
  }
`;

export default ProjectPageStyles;
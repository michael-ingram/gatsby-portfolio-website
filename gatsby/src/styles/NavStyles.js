import styled from 'styled-components';

const NavStyles = styled.nav`
  .nav-container{
    background-color: var(--charcoal);
    height: 100vh;
    width: 30%;
    z-index: 10;
    @media(max-width: 620px){
      width: 100%;
    }
  }
  .cancel-icon{
    color: var(--white);
    font-size: 2.5rem;
    margin: 20px 0 20px;
    padding-left: 20px;
    &:hover {
      color: var(--lightblue);
    }
    @media(max-width: 620px){
      font-size: 3rem;
    }
    @media(max-width: 500px){
      font-size: 1.5rem;
  }
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: left;
    list-style: none;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    align-items: center;
    @media(max-width: 620px){
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  li {
    padding-left: 20px;
  }
  .active {
    color: var(--lightblue);
  }
  a {
    color: var(--white);
    font-size: 2.5rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--lightblue);
    }
    @media (max-width: 620px) {
      font-size: 3rem;
    }
    @media(max-height: 500px){
      font-size: 1.5rem;
    }
    /* &[aria-current='page'] {
      color: var(--red);
    } */
  }
  //@media (max-width: 600px) {
  //  --columns: 5;
  //  margin-bottom: 0.5rem;
  //  border-bottom: 2px solid var(--offwhite);
  //  padding-bottom: 0.5rem;
  //  ul {
  //    grid-template-rows: repeat(var(--columns), 1fr);
  //    justify-items: center;
  //  }
  //}
`;

export default NavStyles;

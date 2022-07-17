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
    //@media(max-width: 600px){
    //  grid-column: span 2;
    //  &:last-child:nth-child(3n - 2) {
    //    grid-column: -2;
    //  }
    //  &:nth-last-child(2):nth-child(3n + 1) {
    //    grid-column-end: 4;
    //  }
    //}
    
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

import styled from 'styled-components';

const NavIconStyles = styled.div`
  .nav-icon{
    padding: 20px 0 20px 40px;
    font-size: 3rem;
    @media(max-width: 800px){
      font-size: 2rem;
    }
    @media(max-height: 600px){
      padding: 20px 0 5px 40px;
    }
  }
`;

export default NavIconStyles;
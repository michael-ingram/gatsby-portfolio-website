import styled from 'styled-components';

const IconLinkStyles = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: right;
    position: absolute;
    top: 20px;
    right: 20px;
  .icon {
    font-size: 3rem;
    padding-left: 5px;
    padding-right: 5px;
    @media(max-width: 800px){
      font-size: 2rem;
    }
  }
`;

export default IconLinkStyles;
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --darkgreen: #1f2220;
    --lightblue: #a2c6e9;
    --treegreen: #749476;
    --olivegreen: #49624a;
    --seafoam: #9FE2BF;
    --offwhite: #Fdfff5;
    --lightgreen: #C1E1C1;
    --onyx: #0f0f0f;
    --charcoal: #36454F;
  }
  html {
    background: var(--charcoal) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body {
    font-size: 2rem;
    font-family: "Ibarra Real Nova", serif;
    color: var(--white);
  }

  #canvas1{
    position: absolute;
    z-index: -1;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(var(--charcoal), var(--onyx));
  }

  fieldset {
    border: none
  }

  button {
    background: var(--onyx);
    color: var(--offwhite);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      background-color: var(--lighblue);
      color: var(--black)
    }
  }
  .content-title{
    font-family: 'The Nautigal', cursive;
    color: var(--offwhite);
    text-align: center;
    margin: 0;
    @media(max-width: 1000px){
      font-size: 2rem;
    }
  }
  .content-outer-container {
    background-color: var(--onyx);
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    margin: 40px 0 5px 0;
    padding: 20px;
    max-height: 70%;
  }
  .content-inner-container {
    background: radial-gradient(var(--charcoal), var(--onyx));
    margin: 0 auto;
    border-radius: 20px;
    max-height: 100%;
    width: 100%;
  }
  .scrollable-content{
    padding: 20px 10px 20px 10px;
    height: 50vh;
    overflow-y: scroll;
    background-color: var(--charcoal);
    color: var(--offwhite);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    @media(max-width: 1000px){
      height: 50vh;
      font-size: 1.5rem;
    }
    @media(max-height: 500px){
      height: 30vh;
      font-size: 1.5rem;
    }
  }
  .content-p {
    margin: 0;
    text-align: center;
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 8px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--onyx) var(--onyx);
  }
  body::-webkit-scrollbar-track {
    background: var(--charcoal);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--offwhite) ;
    border-radius: 6px;
    border: 3px solid var(--offwhite);
  }

  /* Scrollbar Styles */
  div::-webkit-scrollbar {
    width: 8px;
  }
  div {
    scrollbar-width: thin;
    scrollbar-color: var(--onyx) var(--onyx);
  }
  div::-webkit-scrollbar-track {
    background: var(--charcoal);
    border-radius: 20px;
  }
  div::-webkit-scrollbar-thumb {
    background-color: var(--offwhite) ;
    border-radius: 6px;
    border: 3px solid var(--offwhite);
  }

  img {
    max-width: 100%;
  }
  
  a, a:hover, a:focus, a:active{
    color: inherit;
  }

`;

export default GlobalStyles;

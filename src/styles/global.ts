import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Manrope', sans-serif;
    background: #050a14;
  }

  .linkRoute{
    text-decoration: none;
    color: inherit;
  }
`;
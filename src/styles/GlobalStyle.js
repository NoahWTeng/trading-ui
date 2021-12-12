import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {

    --black: #11142D;
    --background-white: #FFFFFF;


    --font-global: 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-title: 'Poppins', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --fz-title: 48px;

    --border-radius: 16px;

    --color-grey: #808191;
    --color-white: #ffffff;

    --opacity: 0.6;
   
    --font-weight-re: 400;
    --font-weight-mb: 500;
    --font-weight-lg: 600;

  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background-white);
    color: var(--black);
    font-family: var(--font-global);
    font-size: var(--fz-md);
    line-height: 1.3;
    font-weight:var(--font-weight-re);

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
  }

  #root {
    min-height: 100vh;
  } 

`;

export default GlobalStyle;

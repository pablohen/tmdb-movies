import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #116193;
    --secondary: #00e8e4;
    --gray50: #f2f2f2;
    --gray100: #ebebeb;
    --gray200: #e6e6e6;
    --gray500: #989898;
    --gray900: #5d5d5d;
    --white: #ffffff;
  }


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Lato', sans-serif;
  }
  
  h1, h2, h3, h3, h4, h5, h6 {
    font-family: 'Abel', sans-serif;
    font-weight: 300;
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;

import { global } from "styled-jsx/css";

import { sizes, colors } from "./theme";

export const globalStyles = global`
  @font-face {
    font-family: "Manrope";
    src: url("/fonts/Manrope-VariableFont_wght.woff2") format("woff2");
    font-style: normal;
    font-display: swap;
  }

  :root {
    font-size: 62.5%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    font-family: "Manrope", Arial, sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #__next {
    isolation: isolate;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const dynamicGlobalStyles = global`
  body {
    font-size: ${sizes.mobile.text.body};
    color: ${colors.black};
    line-height: ${sizes.mobile.lineHeight.body};
    background-color: ${colors.light};
  }
  
  h1 {
    font-size: ${sizes.mobile.text.h1};
    line-height: ${sizes.mobile.lineHeight.h1};
    letter-spacing: ${sizes.mobile.letterSpacing.h1};
  }

  h2 {
    font-size: ${sizes.mobile.text.h2};
    line-height: ${sizes.mobile.lineHeight.h2};
    letter-spacing: ${sizes.mobile.letterSpacing.h2};
  }

  h3 {
    font-size: ${sizes.mobile.text.h3};
    line-height: ${sizes.mobile.lineHeight.h3};
    letter-spacing: ${sizes.mobile.letterSpacing.h3};
  }

  h4 {
    font-size: ${sizes.mobile.text.h4};
    line-height: ${sizes.mobile.lineHeight.h4};
    letter-spacing: ${sizes.mobile.letterSpacing.h4};
  }

  h5  {
    font-size: ${sizes.mobile.text.h5};
    line-height: ${sizes.mobile.lineHeight.h5};
    letter-spacing: ${sizes.mobile.letterSpacing.h5};
  }

  h6  {
    font-size: ${sizes.mobile.text.h6};
    line-height: ${sizes.mobile.lineHeight.h6};
    letter-spacing: ${sizes.mobile.letterSpacing.h6};
  }
`;

import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
export const StyledMain = styled.main.attrs({
  role: 'main',
})`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const StyledContainer = styled.div`
  display: block;
  max-width: 1440px;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export default createGlobalStyle`
  ${normalize}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: fallback;
  font-weight: 600;
  font-display: swap;
  src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gfD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: fallback;
  font-weight: 600;
  font-display: swap;
  src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gnD_vx3rCs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: fallback;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: fallback;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  body, dl, dt, dd,
 ul, ol, li,
 h1, h2, h3, h4, h5, h6,
 pre,
 form, fieldset,
 p, blockquote,
 figure, figcaption,
 table, th, td {
   margin: 0; 
   padding: 0;
 }
 html {
   font-size: 62.5%;
 }
 body {
   font-family: 'Montserrat', 'Helvetica Neu', Arial;
    font-weight: 400;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.40;
  }
 h1, h2{
   display: inline-block;
   color:#00ada7;
   margin-top:1.5rem;
   margin-bottom:1.5rem;
 }
 li {
   list-style:none;
 }
  p, button {
    letter-spacing: 0.05rem;
    font-size: 1.7rem;
    line-height: 2.4rem;
  }
`;

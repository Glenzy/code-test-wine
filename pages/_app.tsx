import App from 'next/app';
import GlobalStyle, { StyledContainer } from 'styles/GlobalStyles';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <StyledContainer>
          <Component {...pageProps} />
        </StyledContainer>
      </>
    );
  }
}

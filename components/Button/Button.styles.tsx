import styled from 'styled-components';

export const A11yCopy = styled.span.attrs({
  ariaHidden: true,
})<{ isHidden?: boolean }>`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0.1rem;
  margin: -0.1rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.1rem;
`;

export const StyledButton = styled.a`
  display: inline-block;
  padding: 0.7rem 1rem;
  cursor: pointer;
  width: 10rem;
  border: 0.1rem solid;
  border-color: #00ada7;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #00ada7;
  -webkit-transition: all 400ms ease-in-out;
  transition: all 400ms ease-in-out;
  &:hover {
    background-color: #007a76;
  }
`;

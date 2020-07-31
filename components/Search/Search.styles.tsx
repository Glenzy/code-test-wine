import styled from 'styled-components';

export const StyledInput = styled.input.attrs({ type: 'text' })`
  display: inline-block;
  border: 0px;
  border-bottom: 0.1rem solid #333;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  max-width: 30rem;
`;
export const StyledLabel = styled.label.attrs({ htmlFor: 'filter', ' aria-labelledby': 'filter' })`
  display: inline-block;
  max-width: max-content;
`;

export const StyledInputWrapper = styled.div`
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

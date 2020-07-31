import { StyledButton, A11yCopy } from './Button.styles';

const Button = ({ a11yLabel, children, ...otherProps }) => (
  <>
    <StyledButton {...otherProps} aria-hidden={a11yLabel ? 'true' : 'false'}>
      {children}
      {a11yLabel && <A11yCopy children={`${a11yLabel}`} />}
    </StyledButton>
  </>
);

export default Button;

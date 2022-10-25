import { ButtonHTMLAttributes } from 'react';
import * as Styled from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant: 'primary' | 'secondary' | 'text';
  size: 'small' | 'medium' | 'large';
}

const Button = ({
  fullWidth = false,
  variant,
  size,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <Styled.Button fullWidth={fullWidth} variant={variant} size={size} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;

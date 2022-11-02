import { InputHTMLAttributes } from 'react';
import * as Styled from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'text';
  shape?: 'default' | 'circle';
  width?: 'small' | 'medium' | 'full';
  status?: 'active' | 'disabled';
}

const Input = ({
  width = 'full',
  variant = 'default',
  shape = 'default',
  status = 'active',
  ...props
}: InputProps): JSX.Element => {
  return (
    <>
      <Styled.Input width={width} variant={variant} status={status} shape={shape} {...props} />
    </>
  );
};

export default Input;

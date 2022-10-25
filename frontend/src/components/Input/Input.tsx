import { InputHTMLAttributes } from 'react';
import * as Styled from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: 'small' | 'medium' | 'full';
  name?: string;
}

const Input = ({ width, name, ...props }: InputProps): JSX.Element => {
  return (
    <>
      {name ? <Styled.InputName>{name}</Styled.InputName> : ''}
      <Styled.Input width={width} {...props} />
    </>
  );
};

export default Input;

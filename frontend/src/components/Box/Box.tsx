import { HTMLAttributes } from 'react';
import * as Styled from './Box.styles';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  status: 'disabled' | 'active';
  color?: string;
}

const Box = ({ text, status, color = 'none', children, ...props }: BoxProps) => {
  return (
    <Styled.Box status={status} color={color} {...props}>
      {text && (
        <Styled.BoxText status={status} color={color}>
          <div>{text}</div>
        </Styled.BoxText>
      )}
      {children}
    </Styled.Box>
  );
};

export default Box;

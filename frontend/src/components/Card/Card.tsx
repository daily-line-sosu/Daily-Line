import { HTMLAttributes } from 'react';
import * as Styled from './Card.styles';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  width?: string;
  height: string;
  color?: string;
}

const Card = ({ width = '100%', height, color = '#d9d9d9', children }: CardProps): JSX.Element => {
  return (
    <Styled.Card width={width} height={height} color={color}>
      {children}
    </Styled.Card>
  );
};

export default Card;

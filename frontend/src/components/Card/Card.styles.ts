import styled from 'styled-components';
import { CardProps } from './Card';

export const Card = styled.div<CardProps>`
  cursor: pointer;
  border-radius: 0.4rem;
  padding: 1.5rem;
  margin-right: 1.8rem;
  background-color: ${({ color }) => color};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

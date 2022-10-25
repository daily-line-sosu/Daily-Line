import styled, { css } from 'styled-components';
import { ImageProps } from './Image';

interface Props {
  shape: 'default' | 'cicle';
}

const shapeCSS = {
  cicle: css`
    border-radius: 50%;
  `,
  default: css``,
};

export const Image = styled.img<Props>`
  ${({ shape }) => shapeCSS[shape]}
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

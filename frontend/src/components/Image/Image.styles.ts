import styled, { css } from 'styled-components';

interface Props {
  shape: 'default' | 'circle';
}

const shapeCSS = {
  circle: css`
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

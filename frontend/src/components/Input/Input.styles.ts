import styled, { css } from 'styled-components';

interface InputProps {
  variant: 'default' | 'text';
  shape: 'default' | 'circle';
  width: 'small' | 'medium' | 'full';
  status: 'active' | 'disabled';
}

const widthCSS = {
  small: css`
    width: 8rem;
  `,
  medium: css`
    width: 12rem;
  `,
  full: css`
    width: 100%;
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 0.4rem;
  `,
  circle: css`
    border-radius: 2rem;
  `,
};

const statusCSS = {
  active: css`
    border: 2px solid ${({ theme }) => theme.colors.primary_color};
  `,
  disabled: css`
    border: 2px solid ${({ theme }) => theme.colors.gray_light};
  `,
};

const variantCSS = {
  default: css``,
  text: css`
    border: none;
    &:focus {
      border: none;
    }
  `,
};

export const Input = styled.input<InputProps>`
  ${({ width }) => widthCSS[width]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ status }) => statusCSS[status]}
  ${({ variant }) => variantCSS[variant]}
  padding: 0.5rem 0.8rem;
  font-size: 0.8rem;
  margin: 0 0.5rem;
  &:focus {
    outline: none;
  }
`;

import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary_color};
    color: white;
    border: none;
  `,
  secondary: css`
    background-color: transparent;
    border: 2.5px solid ${({ theme }) => theme.colors.primary_color};
  `,
  text: css`
    background-color: transparent;
    border: none;
  `,
};

const sizeCSS = {
  small: css`
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 2rem;
  `,
  medium: css`
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 2.2rem 3rem;
    font-size: 1rem;
  `,
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 0.4rem;
  position: relative;
  &:disabled {
    background: ${({ theme }) => theme.colors.gray_light};
    cursor: default;
  }
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  ${({ size }) => sizeCSS[size]}
  ${({ variant }) => variantCSS[variant]}
`;

export const ButtonText = styled.div`
  position: absolute;
  top: -12px;
  left: 0;
  right: 0;
  & > div {
    background-color: white;
    display: inline-block;
    padding: 0 4px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.primary_color};
  }
`;

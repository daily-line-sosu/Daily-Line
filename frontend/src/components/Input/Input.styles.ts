import styled, { css } from 'styled-components';

interface InputProps {
  width: 'small' | 'medium' | 'full';
}

const widthCSS = {
  small: css`
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 2rem;
  `,
  medium: css`
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 2rem;
  `,
  full: css`
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 2rem;
  `,
};

export const Input = styled.input<InputProps>`
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  ${({ width }) => widthCSS[width]}

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary_color};
  }
`;
export const InputName = styled.div``;

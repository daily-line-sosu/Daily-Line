import styled, { css } from 'styled-components';

interface BoxProps {
  text?: string;
  status: 'disabled' | 'active';
  color: string;
}

const statusCSS = {
  disabled: css`
    border: 2px solid ${({ theme }) => theme.colors.gray_light};
  `,
  active: css`
    border: 2px solid ${({ theme }) => theme.colors.primary_color};
  `,
};

export const Box = styled.div<BoxProps>`
  position: relative;
  width: 100%;
  height: 3.3rem;
  border-radius: 0.4rem;
  margin: 0 0.5rem;
  background-color: ${({ theme, color }) =>
    color !== 'none' ? theme[color].light : 'transparent'};
  ${({ status }) => statusCSS[status]}
`;

export const BoxText = styled.div<BoxProps>`
  position: absolute;
  top: -12px;
  left: 0;
  right: 0;
  & > div {
    background-color: white;
    display: inline-block;
    padding: 0 4px;
    font-size: 0.8rem;
    color: ${({ theme, status }) =>
      status === 'active' ? theme.colors.primary_color : theme.colors.gray_light};
  }
`;

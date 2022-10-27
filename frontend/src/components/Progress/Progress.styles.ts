import styled from 'styled-components';

interface ProgressProps {
  color: string;
  percent?: string;
  done: boolean;
}

export const Progress = styled.div<ProgressProps>`
  margin: 0.6rem 0;
  position: relative;
  border-radius: 2rem;
  height: 3rem;
  overflow: hidden;
  background-color: ${({ color, theme, done }) => (done ? 'lightgray' : theme[color].light)};
  cursor: pointer;
  &:hover {
    & > div {
      width: 100%;
      transition: all 0.5s ease-in-out;
    }
  }
  &:not(:hover) {
    & > div {
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const ProgressBar = styled.div<ProgressProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 3rem;
  width: ${({ percent }) => percent};
  border-radius: ${({ percent }) => (percent === '100%' ? '2rem' : '2rem 0 0 2rem')};
  background-color: ${({ color, theme, done }) => (done ? 'lightgray' : theme[color].default)};
`;

export const ProgressBarText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

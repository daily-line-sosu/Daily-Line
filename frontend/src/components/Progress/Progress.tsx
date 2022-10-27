import { HTMLAttributes } from 'react';
import * as Styled from './Progress.styles';

export interface ProgressProps extends HTMLAttributes<HTMLElement> {
  color?: string;
  percent?: number;
  done: boolean;
}

const Progress = ({
  color = 'gray',
  percent = 100,
  done,
  children,
}: ProgressProps): JSX.Element => {
  return (
    <Styled.Progress done={done} color={color}>
      <Styled.ProgressBar done={done} color={color} percent={`${percent}%`} />
      <Styled.ProgressBarText>{children}</Styled.ProgressBarText>
    </Styled.Progress>
  );
};

export default Progress;

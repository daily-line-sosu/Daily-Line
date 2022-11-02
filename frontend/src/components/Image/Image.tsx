import { ImgHTMLAttributes } from 'react';
import * as Styled from './Image.styles';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  shape?: 'circle' | 'default';
}

const Image = ({ shape = 'default', ...props }: ImageProps): JSX.Element => {
  return <Styled.Image shape={shape} {...props} />;
};

export default Image;

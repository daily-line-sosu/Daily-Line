import Image from '../Image/Image';
import * as Styled from './Profile.styles';

export interface ProfileProps {
  image: string;
  nickname: string;
}

const Profile = ({ image, nickname }: ProfileProps): JSX.Element => {
  return (
    <Styled.Profile>
      <Styled.ProfileImage>
        <Image shape="circle" src={image} />
      </Styled.ProfileImage>
      <div>{nickname}</div>
    </Styled.Profile>
  );
};
export default Profile;

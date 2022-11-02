import Button from '@/components/Button/Button';
import Image from '@/components/Image/Image';
import Profile from '@/components/Profile/Profile';
import { useParams } from 'react-router-dom';
import * as Styled from './Challenge.styles';

const Challenge = () => {
  const { id } = useParams();

  return (
    <Styled.ChallengeWrapper>
      <Styled.ChallengeLeft>
        <Styled.ChallengeBlock>
          <h1 className="goal">알고리즘 풀자</h1>
          <p className="description">매일 알고리즘 1문제를 1시간 안에 해결한다.</p>
          <p className="date">22.10.22 - 22.10.31</p>
        </Styled.ChallengeBlock>
        <Styled.ChallengeButton>
          <Button variant="primary" fullWidth={true} size="medium">
            한줄평 생성하기
          </Button>
        </Styled.ChallengeButton>
        <Styled.ChallengeBlock>
          <Styled.ChallengeRank>
            <div>1.</div>
            <div>
              <Image
                src="https://i.pinimg.com/originals/ab/dc/b7/abdcb72e1cdeb57afc6e3d280fbc3a82.jpg"
                shape="circle"
              />
            </div>
            <div>수민</div>
            <div>🔥 10</div>
          </Styled.ChallengeRank>
          <Styled.ChallengeRank>
            <div>2.</div>
            <div>
              <Image
                src="https://i.pinimg.com/564x/f4/ba/cc/f4bacc00194a11469e1752ec56d8d608.jpg"
                shape="circle"
              />
            </div>
            <div>소현</div>
            <div>🔥 9</div>
          </Styled.ChallengeRank>
        </Styled.ChallengeBlock>
      </Styled.ChallengeLeft>
      <Styled.ChallengeRight>
        <Styled.ChallengeUsers>
          <div>
            <div>
              <Styled.ChallengeUserImage
                src="https://i.pinimg.com/originals/ab/dc/b7/abdcb72e1cdeb57afc6e3d280fbc3a82.jpg"
                shape="circle"
              />
            </div>
            <div>
              <Styled.ChallengeUserImage
                src="https://i.pinimg.com/564x/f4/ba/cc/f4bacc00194a11469e1752ec56d8d608.jpg"
                shape="circle"
              />
            </div>
          </div>
        </Styled.ChallengeUsers>
        <Styled.ChallengeTimeLine>
          <Styled.ChallengeDate>2022년 10월 22일</Styled.ChallengeDate>
          <Styled.ChallengeCard>
            <Profile
              image="https://i.pinimg.com/originals/ab/dc/b7/abdcb72e1cdeb57afc6e3d280fbc3a82.jpg"
              nickname="수민"
            />
            <Styled.ChallengeCardContents>"알고리즘 백준 1235번 성공"</Styled.ChallengeCardContents>
          </Styled.ChallengeCard>
          <Styled.ChallengeDate>2022년 10월 21일</Styled.ChallengeDate>
          <Styled.ChallengeCard>
            <Profile
              image="https://i.pinimg.com/564x/f4/ba/cc/f4bacc00194a11469e1752ec56d8d608.jpg"
              nickname="소현"
            />
            <Styled.ChallengeCardContents>"알고리즘 백준 1235번 성공"</Styled.ChallengeCardContents>
          </Styled.ChallengeCard>
          <Styled.ChallengeCard>
            <Profile
              image="https://i.pinimg.com/originals/ab/dc/b7/abdcb72e1cdeb57afc6e3d280fbc3a82.jpg"
              nickname="수민"
            />
            <Styled.ChallengeCardContents>"알고리즘 백준 1235번 성공"</Styled.ChallengeCardContents>
          </Styled.ChallengeCard>
        </Styled.ChallengeTimeLine>
      </Styled.ChallengeRight>
    </Styled.ChallengeWrapper>
  );
};

export default Challenge;

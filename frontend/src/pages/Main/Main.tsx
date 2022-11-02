import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Input from '@/components/Input/Input';
import Profile from '@/components/Profile/Profile';
import Title from '@/components/Title/Title';
import * as Styled from './Main.styles';

const Main = () => {
  const todaychallenge: any = [
    {
      goal: '알고리즘 1문제',
      start: '2022.10.10',
      end: '2022.10.20',
      count: 4,
      color: '#FFD0D0',
    },
    {
      goal: '운동하기',
      start: '2022.10.10',
      end: '2022.10.20',
      count: 4,
      color: '#FFD0D0',
    },
  ];
  const tags: Array<string> = ['전체', '운동', '생활', '스터디'];
  const challenges: any = [
    {
      goal: '알고리즘 할 사람',
      start: '2022.10.10',
      end: '2022.10.20',
      a: 1,
      b: 10,
      color: '#FFD0D0',
    },
    {
      goal: '알고리즘공부할사람구합니다알고리즘공부할사람구합니다',
      start: '2022.10.10',
      end: '2022.10.20',
      a: 1,
      b: 10,
      color: '#FFD0D0',
    },
  ];
  return (
    <>
      <div>
        <Title>오늘의 한줄을 기록하세요</Title>
        <Styled.MainTodayChallenge>
          {todaychallenge.map((challenge: any, i: number) => (
            <Card key={i} width="12rem" height="12rem" color={challenge.color}>
              <Styled.MainTodayChallengeGoal>{challenge.goal}</Styled.MainTodayChallengeGoal>
              <Styled.MainTodayChallengeItem>⭐ {challenge.count}</Styled.MainTodayChallengeItem>
            </Card>
          ))}
        </Styled.MainTodayChallenge>
      </div>

      <div>
        <Title>같이 챌린지 해보세요</Title>
        <Styled.MainMenu>
          {tags.map((tag, i) => (
            <Styled.MainMenuItem key={i}>
              <Button variant="primary" size="small">
                {tag}
              </Button>
            </Styled.MainMenuItem>
          ))}
          <Styled.MainMenuItem>
            <Input width="small" shape="circle" placeholder="검색어 입력..." />
          </Styled.MainMenuItem>
        </Styled.MainMenu>
        <Styled.MainChallenge>
          {challenges.map((challenge: any, i: number) => (
            <Card height="12rem" color={challenge.color} key={i}>
              <Styled.MainChallengeCardContent>
                <Styled.MainChallengeCardGoal>{challenge.goal}</Styled.MainChallengeCardGoal>
                <Styled.MainChallengeCardDate>
                  {challenge.start}~{challenge.end}
                </Styled.MainChallengeCardDate>
              </Styled.MainChallengeCardContent>
              <Styled.MainChallengeCardUser>
                <Profile
                  image="https://i.pinimg.com/originals/ab/dc/b7/abdcb72e1cdeb57afc6e3d280fbc3a82.jpg"
                  nickname="대구올클녀"
                />
                <div>
                  🐥 {challenge.a}/{challenge.b}
                </div>
              </Styled.MainChallengeCardUser>
            </Card>
          ))}
        </Styled.MainChallenge>
      </div>
    </>
  );
};

export default Main;

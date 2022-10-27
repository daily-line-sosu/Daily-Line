import Image from '@/components/Image/Image';
import Progress from '@/components/Progress/Progress';
import Title from '@/components/Title/Title';
import * as Styled from './Mypage.steyls';

const Mypage = () => {
  const arr = [
    { title: '알고리즘', percent: 64, count: 10, color: 'pink' },
    { title: '알고리즘', percent: 90, count: 10, color: 'yellow' },
    { title: '알고리즘', percent: 20, count: 10, color: 'purple' },
    { title: '알고리즘', percent: 78, count: 10, color: 'green' },
  ];
  const done = [
    { title: '알고리즘', color: 'pink', start: '2022.10.11', end: '2022.10.22' },
    { title: '알고리즘', color: 'blue', start: '2022.10.11', end: '2022.10.22' },
  ];

  return (
    <Styled.MypageWrapper>
      <Styled.MypageProfile>
        <Styled.MypageProfileImage>
          <Image
            src="https://i.pinimg.com/originals/ab/dc/b7/abdcb72e1cdeb57afc6e3d280fbc3a82.jpg"
            shape="cicle"
          />
        </Styled.MypageProfileImage>
        <div className="nickname">닉네임</div>
        <div className="intro">"매일 꾸준히 화이팅"</div>
        <Styled.MypageProfileTable>
          <div>
            <div className="table-number">1</div>
            <div className="table-text">Total</div>
          </div>
          <div>
            <div className="table-number">1</div>
            <div className="table-text">In process</div>
          </div>
          <div>
            <div className="table-number">1</div>
            <div className="table-text">Done</div>
          </div>
        </Styled.MypageProfileTable>
      </Styled.MypageProfile>
      <Styled.MypageChallenges>
        <Styled.MypageChallengeList>
          <Title>진행중인 챌린지</Title>
          {arr.map((x, i) => (
            <Progress done={false} color={x.color} percent={x.percent} key={i}>
              <div>{x.title}</div>
              <div>🔥 {x.count}</div>
            </Progress>
          ))}
        </Styled.MypageChallengeList>
        <Styled.MypageChallengeList>
          <Title>종료된 챌린지</Title>
          {done.map((x, i) => (
            <Progress done={true} key={i}>
              <div>{x.title}</div>
              <div>
                {x.start}~{x.end}
              </div>
            </Progress>
          ))}
        </Styled.MypageChallengeList>
      </Styled.MypageChallenges>
    </Styled.MypageWrapper>
  );
};
export default Mypage;

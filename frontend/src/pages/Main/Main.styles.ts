import styled from 'styled-components';

export const MainMenu = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.sizes.sm}px) {
    justify-content: center;
  }
`;

export const MainTodayChallenge = styled.div`
  display: flex;
  overflow: auto;
  margin-bottom: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainTodayChallengeGoal = styled.div`
  width: 9rem;
  height: 50%;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
export const MainTodayChallengeItem = styled.div`
  width: 9rem;
  height: 50%;
  text-align: center;
`;

export const MainMenuItem = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MainChallenge = styled.div`
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${({ theme }) => theme.sizes.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.sizes.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MainChallengeCardGoal = styled.div`
  max-height: 4rem;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const MainChallengeCardDate = styled.div`
  font-size: 1rem;
  padding: 1rem 0;
`;
export const MainChallengeCardContent = styled.div`
  height: 6.4rem;
`;
export const MainChallengeCardUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

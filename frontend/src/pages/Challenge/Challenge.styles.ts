import Image from '@/components/Image/Image';
import styled from 'styled-components';

export const ChallengeWrapper = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.sizes.md}px) {
    display: block;
  }
`;

export const ChallengeLeft = styled.div`
  height: 100%;
  margin-right: 3rem;
  margin-bottom: 0;
  @media (max-width: ${({ theme }) => theme.sizes.md}px) {
    margin-right: 0;
  }
`;

export const ChallengeBlock = styled.div`
  width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  padding: 1rem;
  .goal {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    padding-bottom: 0.8rem;
  }
  .description {
    padding: 1rem;
  }
  .date {
    padding: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.sizes.md}px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const ChallengeRank = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  div:nth-child(1) {
    width: 10%;
  }
  div:nth-child(2) {
    width: 25%;
    & > img {
      width: 3rem;
      height: 3rem;
    }
  }
  div:nth-child(3) {
    width: 50%;
  }
  div:nth-child(4) {
    width: 15%;
  }
`;

export const ChallengeButton = styled.div`
  margin-bottom: 1rem;
`;

export const ChallengeRight = styled.div`
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  width: 100%;
`;

export const ChallengeUsers = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  gap: 10px;
  overflow: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_light};

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    display: flex;
    align-items: center;
  }
`;

export const ChallengeUserImage = styled(Image)`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

export const ChallengeTimeLine = styled.div`
  padding: 1rem;
`;

export const ChallengeCard = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 0.4rem;
  max-width: 400px;
  padding: 1rem;
  border: 1px solid gray;
`;

export const ChallengeDate = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
`;

export const ChallengeCardContents = styled.div`
  padding: 1rem;
`;

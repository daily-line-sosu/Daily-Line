import styled from 'styled-components';

export const MypageWrapper = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.sizes.md}px) {
    display: block;
  }
`;

export const MypageProfile = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  border-radius: 0.4rem;
  width: 330px;
  height: 100%;
  padding: 1rem;
  text-align: center;
  margin-right: 3rem;
  margin-bottom: 0;
  .nickname {
    padding: 0.5rem;
    font-size: 1.4rem;
    font-weight: bold;
  }
  .intro {
    padding: 0.5rem;
    font-size: 1.1rem;
  }
  @media (max-width: ${({ theme }) => theme.sizes.md}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export const MypageProfileImage = styled.div`
  padding: 2rem 0;
  img {
    width: 220px;
    height: 220px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.md}px) {
    padding: 1rem 0;
    img {
      width: 180px;
      height: 180px;
    }
  }
`;

export const MypageProfileTable = styled.div`
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  border-radius: 0.4rem;
  display: flex;
  & > div {
    flex: 1;
  }
  & > div:nth-child(2) {
    border-left: 1px solid ${({ theme }) => theme.colors.gray_light};
    border-right: 1px solid ${({ theme }) => theme.colors.gray_light};
  }
  .table-number {
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 0.5rem;
  }
  .table-text {
    color: gray;
    font-size: 0.9rem;
    padding: 0.3rem 0;
  }
`;

export const MypageChallenges = styled.div`
  flex: 1;
`;

export const MypageChallengeList = styled.div`
  margin-bottom: 2rem;
`;

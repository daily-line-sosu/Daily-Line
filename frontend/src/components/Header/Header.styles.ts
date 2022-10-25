import styled from 'styled-components';
import Layout from '@/components/Layout/Layout';
import Button from '@/components/Button/Button';

export const HeaderLayout = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0rem;
  @media (max-width: ${({ theme }) => theme.sizes.lg}px) {
    padding: 0;
    padding-bottom: 2rem;
  }
`;

export const HeaderLogo = styled.div`
  height: 3rem;
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  display: flex;
`;

export const HeaderMenuProfile = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const HeaderMenuItem = styled.div`
  font-size: 4rem;
  margin: 0 0.8rem;
  line-height: 1.9rem;
  a {
    color: ${({ theme }) => theme.colors.primary_color};
  }
`;

export const HeaderMenuLogin = styled(Button)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary_color};
`;

import styled from 'styled-components';

const Layout = styled.div`
  margin: 0 auto;
  min-width: 300px;
  max-width: 1100px;
  padding: 2rem 0.5rem;
  @media (max-width: ${({ theme }) => theme.sizes.lg}px) {
    padding: 1rem 1rem;
  }
`;

export default Layout;

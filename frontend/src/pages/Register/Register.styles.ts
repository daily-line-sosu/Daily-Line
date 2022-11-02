import Box from '@/components/Box/Box';
import Input from '@/components/Input/Input';
import styled from 'styled-components';

interface Props {
  status: 'active' | 'disabled';
}

export const Register = styled.div`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
`;

export const RegisterTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary_color};
  padding: 2rem 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const RegisterBlock = styled.div`
  padding: 0.8rem 0;
  display: flex;
  position: relative;
`;

export const RegisterBoxGroup = styled(Box)`
  height: 10rem;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RegisterBoxColor = styled(Box)`
  height: 3.3rem;
  @media (max-width: 500px) {
    height: 10vw;
  }
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ status }) => (status === 'active' ? 1 : 0)};
    transition: 0.2s;
  }
`;

export const RegisterInput = styled(Input)`
  height: 3.3rem;
  text-align: center;
  font-size: 1rem;
`;

export const RegisterInputText = styled.div<Props>`
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  & > div {
    background-color: white;
    display: inline-block;
    padding: 0 4px;
    font-size: 0.8rem;
    color: ${({ theme, status }) =>
      status === 'active' ? theme.colors.primary_color : theme.colors.gray_light};
  }
`;

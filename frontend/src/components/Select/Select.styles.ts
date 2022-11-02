import styled from 'styled-components';

export const Select = styled.div`
  position: relative;
  height: 100%;
  cursor: pointer;
`;

export const Label = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const OptionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border: 1px solid;
  max-height: 10rem;
  overflow-y: auto;
`;

export const OptionItem = styled.li`
  cursor: pointer;
  padding: 0.75rem;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary_color_light};
    transition: 0.1s;
  }
`;

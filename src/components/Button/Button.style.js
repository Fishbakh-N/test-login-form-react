import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: inherit;
  font-size: 17px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.info};
  border-radius: 3px;
  border: none;
  height: 45px;
  width: 100%;
`;

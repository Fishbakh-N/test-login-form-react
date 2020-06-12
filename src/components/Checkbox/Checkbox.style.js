import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  
  label {
    display: flex;
    align-items: center;
    
    .checkbox {
      border: 1px solid ${({ theme }) => theme.border.input};
      padding: 4px;
    }
    
    span {
      margin-left: 8px;
      font-family: inherit;
      font-size: 14px;
    }
  }
`;

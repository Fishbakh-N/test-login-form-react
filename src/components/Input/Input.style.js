import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  position: relative;
  
  .text-input {
    font-family: inherit;
    border: 1px solid ${({theme}) => theme.border.input};
    border-radius: 3px;
    padding: 14px;
    font-size: 14px;
    width: -webkit-fill-available;
    
    &.error {
      border: 1px solid ${({theme}) => theme.colors.error};
    }
  }
  
  .error-message {
    font-family: inherit;
    font-size: 14px;
    color: ${({theme}) => theme.text.error};
    padding: 5px 0 0 2px;
  }
`;

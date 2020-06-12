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
  
  .show-pass {
    position: absolute;
    width: 73px;
    height: 30px;
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.ghost};
    top: 9px;
    right: 7px;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    z-index: 10;
    pointer-events: all;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Muli', sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.black };
    opacity: .6;
  }
  
  .action-buttons {
    position: absolute;
    width: 500px;
    top: calc(100vh * 12 / 100);
    left: calc(100vw / 2 - 250px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .action {
      border: 1px solid ${({ theme }) => theme.border.input};
      border-radius: 3px;
      color: ${({ theme }) => theme.colors.white};
      font-family: inherit;
      font-size: 24px;
      font-weight: 500;
      width: 162px;
      height: 45px;
      background: transparent;
      cursor: pointer;
    }
  }
`;

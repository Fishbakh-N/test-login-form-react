import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  padding: 17px 0;
  
  .divider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    .line {
      width: 50%;
      border-bottom: 1px solid ${({ theme }) => theme.border.input};
    }
    
    .or {
      padding: 0 20px;
      color: ${({ theme }) => theme.text.secondary};
    }
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 17px;
    
    .facebook,
    .google {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 45px;
      border-radius: 3px;
      border: none;
      color: ${({ theme }) => theme.colors.white};
      font-family: inherit;
      font-size: 16px;
      font-weight: bold;
      
      .icon {
        margin-right: 18px;
        font-size: 24px;
      }
    }
    
    .facebook {
      background-color: ${({ theme }) => theme.colors.facebook};
    }
    
    .google {
      background-color: ${({ theme }) => theme.colors.google};
    }
  }
`;

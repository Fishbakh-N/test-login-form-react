import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  position: relative;
  padding: 28px 40px 35px 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 7px ${({ theme }) => theme.border.shadow};
  width: 500px;
  max-width: 500px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text.primary};
  
  h4 {
    font-size: 24px;
    font-weight: 500;
    padding: 0 0 30px 0;
    text-align: center;
  }
  
  .ion-android-close {
    position: absolute;
    top: 18px;
    right: 18px;
    color: ${({ theme }) => theme.text.secondary};
    z-index: 2;
  }
  
  .form-input {
    padding-bottom: 17px;
  }
  
  .names {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .form-input {
      width: 50%;
      margin-right: 17px;
      
      &:last-child {
        margin-right: 0;
      }
    }
  }
  
  .info {
    font-family: inherit;
    font-size: 14px;
    color: ${({ theme }) => theme.text.secondary};
    padding: 17px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 17px;
    color: ${({ theme }) => theme.text.primary};
    margin-top: 18px;
    
    a {
      color: ${({ theme }) => theme.colors.info};
      margin-left: 4px;
      text-decoration: none;
    }
  }
  
  .check-info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 17px;
    color: ${({ theme }) => theme.text.primary};
    margin-bottom: 17px;
  }
  
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: inherit;
    font-size: 14px;
    margin-top: 17px;
    
    i {
      margin-right: 8px;
    }
    
    a {
      text-decoration: none;
    }
    
    .back {
      color: ${({ theme }) => theme.text.secondary};
    }
    
    .resend {
      color: ${({ theme }) => theme.colors.info};
    }
  }
`;

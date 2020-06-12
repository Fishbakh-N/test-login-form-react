import React from 'react';
import { Wrapper } from './SocialButtons.style';

const SocialButtons = () => {

  return (
    <Wrapper>
      <div className="divider">
        <span className="line" />
        <span className="or">Or</span>
        <span className="line" />
      </div>
      <div className="buttons">
        <button className="facebook">
          <i className="icon ion-social-facebook" />
          <span>Facebook</span>
        </button>
        <button className="google">
          <i className="icon ion-social-google" />
          <span>Google</span>
        </button>
      </div>
    </Wrapper>
  );
};

export default SocialButtons;
export { SocialButtons };

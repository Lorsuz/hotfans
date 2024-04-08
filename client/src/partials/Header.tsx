import React from 'react';

import styled from 'styled-components';
import HotFansLogo from './../assets/images/HotFans-logo2.png';
import ThemeSwitcher from '../components/actions/ThemeSwitcher';

const Header = () => {
  return (
    <StyledComponent>
      <div className='logo'>
        <img src={HotFansLogo} alt='' />
      </div>
      <div className='theme'>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    </StyledComponent>
  );
};
const StyledComponent = styled.header`
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;

  .logo {
    img {
      width: 120px;
    }
  }
`;
export default Header;

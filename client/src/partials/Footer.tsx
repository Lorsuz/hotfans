import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledComponent>
      <span>
        Web Application developed by <a href='#'>@Dployter</a>
      </span>
    </StyledComponent>
  );
};

const StyledComponent = styled.footer`
  background: var(--color-black);
  span {
    display: block;
    text-align: center;
    padding: 20px 0;
    color: var(--color-white);
    a {
      color: var(--color-white-soft);
      &:hover {
        color: var(--color-secondary);
      }
    }
  }
`;

export default Footer;

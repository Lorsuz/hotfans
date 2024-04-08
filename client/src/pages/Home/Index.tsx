import React from 'react';
import Layout from '../../layouts/PageLayout';
import styled from 'styled-components';
import HotFansBG from './../../assets/images/HotFans-bg.jpg';
import ServicesCard from './ServicesCard';
import { Services } from '../../exports/services';

const Home: React.FunctionComponent = () => (
  <Layout title='Página Inicial'>
    <StyledComponent>
      <article className='cover'>
        <div className='cover__bg-img'>{/* <img src={HotFansBG} alt='' /> */}</div>
        <div className='cover__bg-gradient'></div>
      </article>
      <article className='services'>
        <div className='container'>
          <h2>Exclusivos</h2>
          <ul>
            {Services.map(service => (
              <ServicesCard card={service} />
            ))}
          </ul>
        </div>
      </article>
    </StyledComponent>
  </Layout>
);

const StyledComponent = styled.main`
  .cover {
    position: relative;
    .cover__bg-img {
      width: 100%;
      background: url(${HotFansBG});
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: 100%;
      height: 100dvh;
    }
    .cover__bg-gradient {
      width: 100%;
      height: 100%;
      background: linear-gradient(#00000098, #00000071, #000000a1);
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .services {
    h2 {
    }
    ul {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
`;

export default Home;

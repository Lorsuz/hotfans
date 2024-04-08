import React from 'react';
import styled from 'styled-components';

const ServicesCard = ({ card }: any) => {
  const { image, discount, name, time, price, total } = card;
  return (
    <StyledComponent>
      <div className='card__figure'>
        <div className='figure__img'>
          {/* <img src={image} alt='' /> */}
          <img src='https://placeholder.co/300x200' alt='' />
        </div>
        <div className='figure__discount'>{discount}%</div>
      </div>
      <div className='card__desc'>
        <h3>
          {name} - {time}
        </h3>
        <div className='desc__values'>
          <div className='value__price'>{price.toFixed(2)}</div>
          <div className='value__total'>{total.toFixed(2)}</div>
        </div>
      </div>
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
  .card__figure {
    .figure__img {
      min-width: 300px;
      img {
        width: 100%;
        height: 180px;
      }
    }
    .figure__discount {
    }
  }
  .card__desc {
    .desc__values {
      .value__price {
      }
      .value__total {
      }
    }
  }
`;

export default ServicesCard;

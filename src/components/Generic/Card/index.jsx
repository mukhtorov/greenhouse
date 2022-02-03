import React, { memo } from 'react';
import { Container, Image, Info, Main, Wrapper } from './style';

export const Card = ({ value }) => {
  console.log('card');
  return (
    <Container>
      <Main>
        <Image src={value.img} />
      </Main>
      <Wrapper>
        <Info.Title>{value.name}</Info.Title>
        <Info.Price>
          ${value.price} {value.status}
        </Info.Price>
      </Wrapper>
    </Container>
  );
};

export default memo(Card);

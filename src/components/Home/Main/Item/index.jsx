import { Container, Left, Right } from './style';
import Button from '../../../Generic/Button';

export const Main = ({ img }) => {
  return (
    <Container>
      <Left>
        <Left.Text>Welcome to GreenShop</Left.Text>
        <Left.MainText>
          Let’s Make a Better <Left.Span>Planet</Left.Span>{' '}
        </Left.MainText>
        <Left.Desc>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </Left.Desc>
        <Button width={'140px'}>SHOP NOW</Button>
      </Left>
      <Right>
        <Right.SmallImg src={img} alt='' />
        <Right.BigImg src={img} alt='' />
      </Right>
    </Container>
  );
};

export default Main;

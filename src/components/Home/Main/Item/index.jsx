import { Container, Left, Right } from './style';
import Button from '../../../Generic/Button';

export const Main = ({ value }) => {
  return (
    <Container>
      <Left>
        <Left.Text>Welcome to GreenShop</Left.Text>
        <Left.MainText>
          {value.title} <Left.Span>{value.highletedText}</Left.Span>{' '}
        </Left.MainText>
        <Left.Desc>{value.description}</Left.Desc>
        <Button width={'140px'}>SHOP NOW</Button>
      </Left>
      <Right>
        <Right.SmallImg src={value.src} alt='' />
        <Right.BigImg src={value.src} alt='' />
      </Right>
    </Container>
  );
};

export default Main;
